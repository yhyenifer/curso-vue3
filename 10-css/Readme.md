#Metodología BEM

son una seie de consejos para estructurar nuestras clases de forma sencilla, escalable y reutilizable.

**_BEM_** => Block, element, modifier
**Block (bloque)**: es un elemento autonomo e independiente, un menu, formulario, mapa, galeria.
**Element**: es cada uno de los elementos del bloque. un link, una imagen, un campo de texto.
**Mofifier (modificadores**: cuando el bloque se repite en otro lugar pero con alguna modificacion.

Los bloques se denominan con una sola palabra, separadas con un guion

`.menu || .main-manu .gallery || .main-gallery`

los elementos se nombran con el nombre del bloque al que pertenecen y su nombre con dos guiones bajos

`.menu__item || .main-menu__link .gallery__img || .main-gallery__item `

los modificadores, con el nombre al bloque que pertenecen y su modificador con dos guines medios

`.menu__iten--active || gallery__item--special`

#Modelo de caja

en la web todos son cajas, forma en que se ponen o dibujan se denomina **layout**.
las propiedades principales de las cajas con el width y el height

existen dos tipo de **elementos** en html los `inline`y los `block` esto se modifica con el atributo **`display`**

## elementos inline:

- elemementos que solo ocupan si contenido, no se les puede modificar ni su ancho, ni su alto.

## los emementos de bloque

- ocupan todo el espacio disponible, se les puede asignar ancho y alto
- podemos centrarlos con `margin-left: auto` y `margin-right: auto`

## Componentes de la caja

- Contenido
- Padding es la distancia entre el contenido y el borde
- Border `border: 10px solid blue;`
- Outline se dibuja fuera del borde `outline: px solid red;`
- Margin es la distancia entre un elemento y otro

### margin y padding

- margin top
- margin right
- marin bottom
- margin left

### border

- border width
- border style: solid, dotted, none, hcoridden, dashed, groove, ridge, inset, outset, initial, inherit, hidden
- border color

con los border podemos hacer flechas en los divs

`.box {
width: 300px;
height: 200px;
margin: 2em;
background: green;
border: 100px solid red;
border-top-width: 200px;
border-top-color: transparent;

}`

### outline

linea que rodea el borde

- width
- style
- color
- offset

## Position

este nos permite modificar el flujo del HTML, el orden que aparecen los elementos

- static (valor por defecto)
- relative
- absolute
- fixed
- sticky

al tener un elemento posicionado, podemos hacer uso de:

- top, mover elemento a la parte superior
- right, mover elemento a la parte derecha
- bottom, mover elemento a la parte inferior
- left, mover elemento a la parte izquierda.
- z-index, decidimos cual aparece por encima de cual.

## relative

hace que el elemento se coloque respecto a su posicion en el flujo, conserva su espacio reservado.
Las propiedades top y left tienen mas valor que right t bottom.

## Absolute

hace que el elemeneto se coloque a su contenedor posicionado mas cercano, si no encuentra, lo hara al esapacio reservado (viewport)

- este no conserva su espacio reservado.
- las dimenciones se ajsutan a su contenido en caso de no tenerlas declarados.
- su punto de referencia no se modifica aunque lo movamos.

si a un div le ponemos posicion relative, y los div internos absolute, los div insternos se moveran de acuerdo al div, relative, si este no existe los internos se moveran de acuerso al viewport

### centrar un div:

`.content{ posicion: relative; .box{ border 4px solid blue; position: absolute; top: 0; right: 0; left: 0; bottom: 0; margin: auto; } } `

## fixed

hace que el elemento se coloque respecto al viewport (espacio disponible en pantalla). eL no conserva su espacio en el flujo, si no tiene dimenciones declaradas, sus dimenciones se ajustan al contenido, su punto de referencia no se modificará aunque movamos el elemento.
cuando hacemos el scroll, este elemento no se movera, se quedda fijo

- menu:
  `body{ padding-top: 6em} .menu{ background: black; padding: .5em; text-align: center; font-size: 2em; position: fixed; top:0; width: 100%} .title{margin:0;}`

## sticky

es una mezcla entre relative y fixed, conserva su espacio en el flujo, las dimenciones de ajustan al contenido, su punto de referencia no cambis aunque se mueva y si hacemos scroll, este no se movera

## z-index

nos permite modificar el orden de las capaz en el eje z, admite valores positivos y negativos, no se recomienta consecutivos, si no 10, 20 ,30
si el padre tiene z-index declarado, no podemos poner un hijo por encima.

## Display

nos permite definir como se comporta una caja con respecto a las demas.

- inline
- block
- inline-block: se comporta un elemento en linea pero acepta width y heigth
- none oculta el elemento
- table imita el comportamiento de una tabla
- list-item imita el comportamiento de una lista
- flex maquetar componentes
- grid maquetar layout

los elementos inline no aplican los atributos verticalmente, solo horizontal

## pseudoelemento

se utilizan para dar estilo a partes especificas de un elemento.
la sintaxis es un selector::pseudo-element{estilos}

- ::first-line en elementos de bloque y selecciona la primer linea `.text::first-line{}`
- ::first-letter en elementos de bloque y selecciona la primer letra `.text::first-letter{}`
- ::selection, le da estilo a un trozo que el usuario selecciona

para estos se necesita la propiedad content obligatoria, sirven para inline y son hijos del elemento al que pertenecen
son elementos que no existen en el DOM ni en el html, son objetos virtuales

- ::before, antes del elemento `.dolar::before{content: '$';}`
- ::after, despues del elemento

## Pseudoclases

son selectores en tiempo real detectando la interaccion del usuario con algunos elementos.
funionan con todos los selectores
no estan atadas a ningun elemento

`selector:pseudoclase{estilos}`

### Dinamicos

- link, link no visitado, solo a links
- visited, link visitado, solo a links
- hover, al poner el mouse sobre el elemento
- active, al dar click, solo a links
- focus, cuando tiene foco

## Target

- target, el elemento es objetivo de un marcador o ancla

- menu que no tape el contenido
  `.text-menu:target{padding-top: 75px;}` se aplica cuando el target nos lleve a un marcador

## language

- lang(), elemento que contiene lang que especifiquemos
  `.span:lang(en){ color : red;}`

## UI state

son para formularios

- enabled
- disabled
- checked
- in-range
- out-of-range
- required
- optional
- valid
- invalid
- fullscreen
- read-only
- read-write

## Structural

- root, seleccionamos la raiz del proyecto
- empty, seleccionamos los elementos vacios, etiquetas que no tengan contenido
  -- all resetea, todas las propiedades
  -- all: unset; reset todo

- child
  - first-child, selecciona el primer hijo
  - last-child, selecciona el ultimo hijo
  - nth-child(n), selecciona al hijo n,
  - nth-last-child(n), selecciona al hijo n empezado a contar desde el ultimo
    valores de n:
    - odd - Impares
    - even - pares
    - numeros enteros
    - equaciones, 2n, 3n, n inicia en 0 e incrementa
    - only-shild, selecciona al hijo unico
- type
  - first-of-type
  - last-of-type
  - nth-of-type()
  - nth-last-of-type()
  - only-of-type
- not
  - not(condicion), selecciona al elemento que no cumpla la condicion
  - not

# Variables o custom properties

las variables deben estar dentro de un selector, ejemplo root
tienen herencia y cascada
existen globales y locales, en root son globales
las variables css son diferentes a las sass

`selector{ --nombre-variable: valor; }`
para usarlas

`porpiedad: var(--nombre-variable`

# Background

es una propiedad que permite darle fondo a las cajas

- color
- image,
- repeat, definir si se puede repetir
  - no-repeat
  - repeat
  - repeat-y
  - repeat-x
- position, establece la poscion de la imagen, por defecto center
  - left top
  - left center
  - left bottom
  - right top
  - right center
  - right bottom
  - center top
  - center center
  - center bottom
  - x% y%
  - xpos ypos
  - inictial
  - inherit
- size, establece el tamaño de la imagen de fondo:
  - auto
  - cover, cubre la caja completa
  - contain, no se deforma y ocupa todo el tope sin deformarse
  - x [y], se d a valores a ambos o solo a x y y se calcula
- origin, redimencionar para que las cosas quepan

  - border-box
  - padding-box
  - content-box

- clip, establece en que parte de la caja se va a dibujar, recorta la imagen

  - border-box
  - padding-box
  - content-box

- attachment, nos permite establecer si el fondo se coloca respecto a la caja o al viewport

  - fixed, al viewport (paralax)
  - scroll, relativo a la caja

- multiple, podemos usar varios background en una misma caja, las porpiedades van separadas por comas y el que se pone de primero queda por encima

# tipografias

tipos de letra que usa una pagina

- familias tipograficas
- familias genericas

siempre se debe poner fuentes de reserva

- font-family, se recomienda las sans-serif
  se recomienda usas un tipo de fuente para titulos y otra para textos (montserrat), cuando usamos lo import, es mejor ponerlos en el css directamente

podemos importarlas desde google o descargarla ( dafont o 1001font)

las descomprimimos y ponemos en una carpeta assets/fonts
`@font-face{ src: url('assets/fonts/archivo.ttf'); font-family: 'nombre-fuente'}}`

- font-size

  - px, medida absoluta
  - em, medida relativa al contexte (padre)
  - rem, medida relativa al html
  - %, similar a los em

  - vh o vw, % relacion al ancho y alto de la ventana
  - vmin y vmax, medida relativa al valor minimo o maximo del viewport
    , usado en diseño responsivo
    ` font-size: 10vmin`

- font-weight, ancho de la fuente
  - bold
  - nomral
  - 100 - 900
- font-style, estilo
  - italic
  - normal
  - oblique

Propiedades de texto

- text-transform, funciona en los elementos de bloque
  - lowercase
  - uppercase
  - capitalize
- text-align
  - center
  - left
  - right
  - justify, no es usado o recomendado en web
- text-decoration
  - overline, linea superior
  - line-through, tachado
  - underline, linea debajo
  - none
- text-indent, mueve la primer linea de un texto, solo elementos de bloque
  `text-indent: 20px`
- line-height, alto de la linea, nos permite centrar verticalmente, solo funciona con elementos de una linea
- letter-spacing, espacio entre letras, es como ponerle margen a cada uaa de las letras
