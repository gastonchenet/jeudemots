import words from "../data/words.json" assert { type: "json" }
import Translator from "./Translator.js";

/* List maker using phonetic discomposition of words */
export default class Lister {

  /* Word initialization */
  constructor(word) {
    const translator = new Translator();

    this.word = word;
    this.wordComp = translator.phonems(word);
    this.syllabes = translator.syllabes(word);
    this.sounds = this.wordComp.map((x) => x.sound).join(":");
  }

  rs(a) {
    return a.filter((x) => x.sound !== "NPH");
  }

  rss(s) {
    return s.split(":").filter((s) => s !== "NPH").join(":");
  }

  rls(a) {
    let b = [...a]
    if (b[b.length - 1].sound === "NPH") b.pop();
    return b;
  }

  /* Detections of words that includes the following phonetics */
  including() {
    const r = words.filter((x) =>
      x.comp.includes(this.rss(this.sounds)) &&
      x.comp !== this.sounds
    );

    return r.map((x) => ({
      phonetic: x.phonetic,
      word: x.word,
      comp: x.comp
    }));
  }

  /* Detections of words that ends with the following phonetics */
  starting() {
    let r = []

    for (let i = 0; i < this.wordComp.length - 2; i++) {
      const ws = this.rs(this.wordComp).slice(i + 1);
      const wl = ws.length;

      r = [...words.filter((x1) =>
        x1.comp.startsWith(ws.map((x) => x.sound).join(":")) &&
        !r.find((x2) => this.rss(x1.comp) === this.rss(x2.comp))
      ).map((x) => ({
        phonetic: [...this.rls(this.wordComp), ...x.phonetic.slice(wl)],
        word: x.word,
        comp: x.comp
      })), ...r];
    }

    return r;
  }

  /* Detections of words that starts with the following phonetics */
  ending() {
    let r = []

    for (let i = 0; i < this.wordComp.length - 2; i++) {
      const ws = this.rs(this.wordComp).slice(0, -i - 1)
      const wl = ws.length;

      r = [...words.filter((x1) =>
        this.rss(x1.comp).endsWith(ws.map((x) => x.sound).join(":")) &&
        !r.find((x2) => this.rss(x1.comp) === this.rss(x2.comp))
      ).map((x) => ({
        phonetic: [...this.rls(x.phonetic).slice(0, -wl), ...this.wordComp],
        word: x.word,
        comp: x.comp
      })), ...r];
    }

    return r;
  }

  ryhme() {
    const ls = this.syllabes[this.syllabes.length - 1];
    const s = this.rss(ls.sound.join(":")).split(":");
    const lastSound = s[s.length - 1];
    const list = words.filter((x) => {
      const s = this.rss(x.comp).split(":");
      return s[s.length - 1] === lastSound;
    });

    return { 
      words: list,
      last: ls,
      syllabes: this.syllabes
    }
  }
}