import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import explodeDetalhes from '../libs/explodeDetalhes'
import explodePropriedades from '../libs/explodePropriedades'
import montaObjeto from '../libs/montaObjeto'
import retornaParametros from '../libs/retornaParametros'
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

test('constroi query bem complexa',t=>{
  t.is(builderType('author',{},retornaParametros(['name',retornaParametros(['age','photo'])])),'author (){name,{age,photo}}')
})
