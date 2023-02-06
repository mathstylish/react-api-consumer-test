import { useEffect, useState } from "react"
import { getDictWord } from "../../api/dictionary-service"
import { Dictionary } from "../../entities/dictionary"

export function View() {
  const [dict, setDict] = useState<Dictionary[]>()

  useEffect(() => {
    (async () => {
      const response = await getDictWord("cat")
      setDict(response)
      console.log(response)
    })()
  }, [])

  return (
    <>
      {dict?.map(dict => (
        <div style={{width: "980px", margin: "0 auto"}}>
          <h1>{dict.word}</h1>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <p>{dict.phonetic}</p>
            {dict.phonetics.map(phon => (
              <audio src={phon.audio} controls></audio>
            ))}
          </div>
          <div>
            {dict.meanings.map(mean => (
              <div>
                <h4>{mean.partOfSpeech}</h4>
                {mean.definitions.map(def => (
                  <div>
                    <div>
                      <h5>{def.definition}</h5>
                      <p>{def.example}</p>
                    </div>
                  </div>
                ))}
                <p>Synonyms: {mean.synonyms.map(syn => <span>{syn} </span>)}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}