import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import explodeDetalhes from '../libs/explodeDetalhes'
import explodePropriedades from '../libs/explodePropriedades'
import montaObjeto from '../libs/montaObjeto'
import test from 'ava'
const builderType = (name, properties, returnParams) => {
  const params = montaObjeto(
                  explodeDetalhes(
                    explodePropriedades(
                      removeAspas(
                        removeDireita(
                          removeEsquerda(
                            JSON.stringify(properties)
                          )
                        )
                      )
                    )
                  )
                )
                let result = name+' ('+params.join(',')+')'
                result += typeof returnParams === 'undefined' ? '' : returnParams
                return result
}

test('buildType',t=>{
  t.is(builderType('book',{id:'1',name:"igor"}),'book (id:"1",name:"igor")')
})
