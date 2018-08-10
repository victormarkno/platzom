#Platzom

Platzom es un idioma inventado para el curso de [fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com).

## Descripcion del Idioma

- Si la palabra es palindromo se devuelve la misma palabra
- Si la palabra termina en "ar" se le quitan esos dos caracacteres
- si inicia con z se a;ade 'pe' al final
- si la plabra traducida tiene 10 o mas letras se debe unir con un guion

## Instalacion

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'
console.log(platzom('Programar')); //Program
console.log(platzom('Zorro')); //Zorrope
console.log(platzom('zarpar')); //zarppe
console.log(platzom('abecedario')); //abece-dario
console.log(platzom('sometemos')); //SoMeTeMoS
```

## Creditos 

 - [Victor Marcano](https://twitter.com/victormarkno)

 ##licencia

 [MIT](https://opensource.org/licenses/MIT)