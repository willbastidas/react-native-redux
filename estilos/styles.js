import { StyleSheet } from "react-native";
import { colores } from "./colores";

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerScroll: {
        flex: 1,
        backgroundColor: '#fff',
      },
      containerScroll2: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10, 
      },
      conteiner2: {
        flex: 1,
        padding: 35,
      },
      boder : {
        borderRadius: 10,
      },
      titulo:{
        textAlign: "center",
        fontSize: 18,
        marginTop: 12,
        marginBottom: 20,
      },
      boton:{
        backgroundColor: colores.sky_blue,
        height: 35,
        borderColor: colores.dark,
        borderRadius: 10,
        borderWidth: 1,
        padding: 6,
        textAlign: 'center',
      },
      textoDelTab: {
        textAlign: 'center',
      },
      textoBoton:{
        fontSize: 18,
        textAlign: 'center',
      },
      textoTitulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
      },
      textoNombre: {
        fontSize:16,
      },
      textoCentrado: {
        textAlign: 'center',
        fontSize: 15,
      },
      botonLista:{
        backgroundColor: colores.black,
        borderButtomWidth: 1,
        borderButtomColor: colores.c,
        marginBottom: 3,
        padding: 5,
      },
      inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: colores.gray,
        textAlign: 'center',

      },
      map: {
        width: '100%',
        height: '100%',
      },
      space_up:{
        marginTop: 10,
      }
});