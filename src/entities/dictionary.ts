export interface Dictionary {
    word:       string;
    phonetic:   string;
    phonetics:  Phonetic[];
    meanings:   Meaning[];
    license:    License;
    sourceUrls: string[];
}

export interface License {
    name: string;
    url:  string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions:  Definition[];
    synonyms:     string[];
    antonyms:     string[];
}

export interface Definition {
    definition: string;
    synonyms:   string[];
    antonyms:   string[];
    example?:   string;
}

export interface Phonetic {
    text:       string;
    audio:      string;
    sourceUrl?: string;
    license?:   License;
}
