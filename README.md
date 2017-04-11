# Vicmax

Vicmax es un lenguaje inventado

## Descripcion del idioma
- Si la palabra termina con "ar", se ele quitan esas dos letras
- Si la palabra inicia con Z, se le adiciona "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir por la mitad y unir con un guion medio
- Si la palabra original es un palindromo, ninguna regla anterior se aplica y se devuelve la misma palabra pero intercalando letras mayusculas y minusculas

## Instalacion

```
npm install test-npm-package
```
## Uso

```
import vicmax from 'vicmax'

vicmax("Programar") //Program
vicmax("Zorro") //Zorrope
vicmax("abecedario") //abece-dario
vicmax("sometemos") //SoMeTeMoS
```

## Creditos
- [Victor Hugo](https://twitter.com/VHugo1024)

## Licencia
- [MIT](https://opensource.org/licenses/MIT)
