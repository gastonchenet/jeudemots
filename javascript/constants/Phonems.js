/* [a] basic vowel */
const ABV = /a(?=il)|(?:a)(?!n|u|in?|m(?:p|b))/gi;

/* [ə] basic vowel */
const EBV = /eu|e(?!(\w)\1{1}(?!\n|\s)|t|r[^aeéèêiouy]|i(?!ll)|au|m(?:p|b|m)|n(?!n)|(?:z|s?)(?:\n|\s))/gi;

/* [e] amplified vowel */
const EAV = /é|e(?:r|z)(?=\n|\s)|e(?:i(?!l{2})|y)/gi;

/* [ε] diminued vowel */
const EDV = /è|ê|ai(?!l)|e(?=r(?!a|e|é|è|ê|i|o|u|y|\n|\s))|e(?=(\w)\1{1}(?!\n|\s))|et(?=s?(\n|\s))|e(?=t[aeéèêiouy])/gi;

/* [~] composed vowel */
const ECV = /(?:(?:e|a)in(?!e))|(?:e|a)?in(?!n|e)|(?:u(?:(n(?!a|e|é|è|ê|i|o|u|y)|m(?=\n|\s))(?!e)))/gi;

/* [ã] composed vowel */
const ACV = /(?:e|a)(?:n(?!a|e|é|è|ê|i|o|u|y)|m(?=b|p))/gi;

/* [i] basic vowel */
const IBV = /(?:ii)|(?:(?:(?<!e|a|o)i|y(?!e))(?!ll|n(?!e)|m(?=p|b)))/gi;

/* [u] composed vowel */
const UCV = /ou(?!e|i|y)/gi;

/* [ɔ] basic vowel */
const UBV = /(?<!o|e|q|a|g)u(?!n[^aeéèêiouy])/gi;

/* [l] basic consonant */
const LBC = /(?<!i)ll|(?<!l|ai)l(?!l)/gi;

/* [f] basic consonant */
const FBC = /ff?|ph/gi;

/* [v] basic consonant */
const VBC = /v|w(?=a)/gi;

/* [|] composed consonant */
const CCC = /s?ch/gi;

/* [ʒ] composed consonant */
const GCC = /j|g(?=i|e)/gi;

/* [r] basic consonant */
const RBC = /rr|(?<!e)r(?=\n|\s)|r(?!\n|\s)/gi;

/* [p] basic consonant */
const PBC = /pp|p(?!h)/gi;

/* [b] basic consonant */
const BBC = /b/gi;

/* [m] basic consonant */
const MBC = /mm|(m(?=a|e|é|è|ê|i|o|u|y)|(?<!a)m)(?!b|p)/gi;

/* [t] basic consonant */
const TBC = /(?<!e)tt|(?:t(?!t|i|s?(\n|\s))|t(?=i(?!a|e|é|è|ê|i|o|u|y)))/gi;

/* [d] basic consonant */
const DBC = /d/gi;

/* [n] basic consonant */
const NBC = /nn|(?<!g)n(?=e|é|è|ê|a|o|i|u|y|n)|(?<!e|é|è|ê|a|o|i|u|y|g)n/gi;

/* [k] basic consonant */
const KBC = /cc|kk|k|c?qu?|c(?!e|i|h|y)/gi;

/* [g] basic consonant */
const GBC = /gu|g(?!e|é|ê|è|i|n)/gi;

/* [ɲ] composed consonant */
const NCC = /gn/gi;

/* [j] composed consonant */
const JCC = /ill|y(?=e|i)|(?<=(a|e)i)l/gi;

/* [w] composed consonant */
const WCC = /oi(?!n)|o(?=in)|ou(?=i|e|y)|w(?!a)/gi;

/* [o] basic vowel */
const OBV = /o(?=n(?:e|n|o))|o(?!m|n|u|in?)|o(?=m(?!p|b))|e?au/gi;

/* [ɔ̃] composed vowel */
const OCV = /o(?:n(?!n|o|e|é|è|ê)|m(?=b|p))/gi;

/* [s] basic consonant */
const SBC = /ss|ç|c(?=e|i|y)|t(?=i(?:a|e|é|è|ê|i|o|u|y))|((?<=a|e|é|è|ê|i|o|u|y)s(?!a|e|é|è|ê|i|o|u|y|\n|\s)|(?<!a|e|é|è|ê|i|o|u|y)s(?=a|e|é|è|ê|i|o|u|y)(?!\n|\s)|(?<!a|e|é|è|ê|i|o|u|y)s(?!a|e|é|è|ê|i|o|u|y|\n|\s))/gi;

/* [z] basic consonant */
const ZBC = /(?<!e)z|(?<=a|e|é|è|ê|i|o|u|y)s(?=a|e|é|è|ê|i|o|u|y)/gi;

/* [x] basic consonant */
const XBC = /x(?!\n|\s)/gi;

/* [/] non phonemic */
const NPH = /(?<!c|sc?|p)h|(?:(?<!e|t)ts?|(?<!s)s|e)s?(?=\n|\s)|x(?=\n|\s)/gi;

export default { ABV, ACV, BBC, CCC, DBC, EAV, EBV, ECV, EDV, FBC, GBC, GCC, IBV, JCC, KBC, LBC, MBC, NBC, NCC, OBV, OCV, PBC, RBC, SBC, TBC, UBV, UCV, VBC, WCC, XBC, ZBC, NPH }