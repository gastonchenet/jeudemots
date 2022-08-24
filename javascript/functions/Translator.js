import Phonems from "../constants/Phonems.js";

/* Translator class for editing word terms */
export default class Translator {
  constructor() {}

  /* 
  Discompose the word with phonetics tags in the file '/JavaScript/Constants/Phonems'
  */
  phonems(data) {
    data = data + "\n";
    let all = []

    Object.entries(Phonems).forEach(([key, value]) => {
      const vals = [...data.matchAll(value)];
      all = [...all, ...vals.map((d) => ({ i: d.index, s: d[0], k: key }))]
    });

    return all.sort((a, b) => a.i - b.i).map((x) => ({ sound: x.k, comp: x.s }));
  }

  /*
  Discompose the word in syllabes
  */
  syllabes(data) {
    const phonems = this.phonems(data);
    const syllabes = []
    let temp = { sound: [], comp: "" }

    for (const phonem of phonems) {
      temp.sound.push(phonem.sound);
      temp.comp += phonem.comp;

      if (phonem.sound[2] === "V") {
        syllabes.push(temp);
        temp = { sound: [], comp: "" }
      }
    }

    if (temp.sound.length > 0) syllabes.push(temp);

    return syllabes;
  }
}