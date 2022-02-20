# Coding_Challenge_Pervasive_Mind
Descripcion
Para resolver este problema, se utilizo los conceptos de recursividad y de programacion dinamica para evitar el uso de recursos de la maquina.
En la funcion DataBase se usara una variable llamada element que sera llenado hasta la longitud de 4096 campos, llenados del 0 a 4095.
De igual manera hay 2 variables declaradas llamadas InputList, en el cual se usara como parametro y llamar a la funcion read(que se vera mas adelante) y tambien la variable
Diccionario(usando de analogia a python) pero como este no existe en JavaScript, lo mas parecido es un array con objetos clave valor.
El campo llamado InputList que recibira el parametro de entrada(first) y la longitud que tiene que recorrer(second).

Dado que hay datos que se pueden repetir y evitar la llamada nuevamente de estos en la funcion read, con la variable Diccionario se hizo una logica para evitar llenar nuevamente
con datos iguales, y asi tener una mejor optimizacion de esta.

Recomendaciones:
Version Actual de Nodejs - 16.14.0

Instrucciones:
Descargar el proyecto a traves de git.
Abrir el proyecto en Visual Studio Code.
En la consola de comandos usar npm install
Por defecto el proyecto estara habilitado en el puerto 5018(esto puede ser cambiado en las variables de entorno)
Solo golpearlo de esta manera ya sea con postman, insomnia u otra manera en la que desee.
![image](https://user-images.githubusercontent.com/43737954/154859734-c8455bb4-7091-47d8-9042-94accbd20fb8.png)
