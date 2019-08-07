const regex = /.*[^\u{00}-\u{FF}  \u{20AC} \u{201A} \u{0192} \u{201E} \u{2026} \u{2020} \u{2021} \u{02c6} \u{2030} \u{0160} \u{2039} \u{2039} \u{0152} \u{017D} \u{2018} \u{2019} \u{201C} \u{201C} \u{201D} \u{2022} \u{2013} \u{2014} \u{02DC} \u{2122} \u{0161} \u{203A} \u{0153} \u{017E} \u{0178}]/u;

exports.hasCharacterNotInCP1252 = input => regex.test(input);

exports.textIsCP1252Compatible = input => !regex.test(input);
