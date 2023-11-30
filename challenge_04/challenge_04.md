[🏠 Home](https://github.com/jcuencagento/codemberJCG)

## El reto

**Hackers dañan sistema de archivos**
En un mundo donde la información es poder, 
un hacker conocido como Savipo Yatar descubre una serie de archivos en un servidor altamente protegido.

Estos archivos contienen secretos que podrían cambiar el curso de la historia. Pero hay un problema: algunos de los archivos son falsos, 
diseñados para engañar a los intrusos. Savipo Yatar debe determinar rápidamente cuáles archivos son reales y cuáles son falsos.

Cada archivo tiene un nombre con dos partes, separadas por un guion (-). 
La primera parte es una cadena alfanumérica y la segunda es unchecksum, 
que es una cadena formada por los caracteres que sólo aparecen una vez en la primera parte y en el orden en que aparecen.

Escribe un programa que determine si un archivo es real o falso basado en estas reglas.

Ejemplos:

Nombre del archivo: **xyzz33-xy**
Resultado: ✅ **Real** (El checksum es válido)

Nombre del archivo: **abcca1-ab1**
Resultado: ❌ **Falso** (El checksum debería ser b1, es incorrecto)

Nombre del archivo: **abbc11-ca**
Resultado: ❌ **Falso** (El checksum debería ser ac, el orden es incorrecto)
Cada línea indica el nombre del archivo y su correspondiente checksum, separados por un guion (-).



[✅ Solución](https://github.com/jcuencagento/codemberJCG/blob/master/challenge_04/challenge_04.js)


[🔙 Back](https://github.com/jcuencagento/codemberJCG/blob/master/challenge_03/challenge_03.md)