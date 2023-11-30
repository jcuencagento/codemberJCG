[🏠 Home](https://github.com/jcuencagento/codemberJCG)

## El reto

**El problema final**
Finalmente los hackers han conseguido acceder a la base de datos y la han dejado corrupta. 
Pero parece que han dejado un mensaje oculto en la base de datos. ¿Podrás encontrarlo?

Nuestra base de datos está en formato .csv. Las columnas son id, username, email, age, location.

Un usuario sólo es válido si:

- **id**: existe y es alfanumérica
- **username**: existe y es alfanumérico
- **email**: existe y es válido (sigue el patrón user@dominio.com)
- **age**: es opcional pero si aparece es un número
- **location**: es opcional pero si aparece es una cadena de texto
Ejemplos:

Entrada: 1a421fa,alex,alex9@gmail.com,18,Barcelona
Resultado: ✅ Válido

Entrada: 9412p_m,maria,mb@hotmail.com,22,CDMX
Resultado: ❌ Inválido (id no es alfanumérica, sobra el _)

Entrada: 494ee0,madeval,mdv@twitch.tv,,
Resultado: ✅ Válido (age y location son opcionales)
Entrada: 494ee0,madeval,twitch.tv,22,Montevideo
Resultado: ❌ Inválido (email no es válido)



[✅ Solución](https://github.com/jcuencagento/codemberJCG/blob/master/challenge_05/challenge_05.js)


[🔙 Back](https://github.com/jcuencagento/codemberJCG/blob/master/challenge_04/challenge_04.md)