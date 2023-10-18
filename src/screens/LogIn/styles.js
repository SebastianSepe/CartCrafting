import { StyleSheet } from "react-native"
import { COLORS } from "../../styles/colors/colors/"


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BackgroundPrimary,
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: -6,
    //marginBottom: 10,
    //position: "relative",

  },

  headerForm: {
    position: 'absolute',
    justifyContent: "flex-end",
    width: '70%',
    height: '70%',
    top: '22%',
    backgroundColor: COLORS.primary, // Fondo con opacidad       // Añadir esta propiedad con un valor negativo
    borderTopRightRadius: 140,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 140,
    zIndex: -5,
    //borderWidth: 10,


  },

  headerForm2: {
    position: 'absolute',
    justifyContent: "flex-end",
    width: '80%',
    height: '45%',
    bottom: '20%',
    backgroundColor: COLORS.primary, // Fondo con opacidad       // Añadir esta propiedad con un valor negativo
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 140,
    borderBottomLeftRadius: 140,
    borderWidth: 2,
    borderColor: 'skyblue'
  },

  headerForm3: {
    position: 'absolute',
    justifyContent: "flex-end",
    width: '5%',
    height: '60%',
    left: '0%',
    bottom: '30%',
    backgroundColor: COLORS.primary, // Fondo con opacidad       // Añadir esta propiedad con un valor negativo
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,

    borderWidth: 2,
    borderColor: 'skyblue',
    zIndex: -5,
  },

  headerForm4: {
    position: 'absolute',
    justifyContent: "flex-end",
    width: '5%',
    height: '60%',
    right: '0%',
    bottom: '30%',
    backgroundColor: COLORS.primary, // Fondo con opacidad       // Añadir esta propiedad con un valor negativo
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: 'skyblue',
    zIndex: -5,
  },

  containerTitle: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },

  title: {
    width: 200,
    height: 200,
    //bottom: '',
    right: '2%',
  },



  middle: {
    flex: 1,
    overflow: "visible",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    r
  },




  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "80%",
    height: 50,
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },

  textPlaceholder: {
    position: 'absolute',
    top: -10,
    left: 40, // Ajusta la posición horizontal según tus necesidades
    backgroundColor: COLORS.BackgroundPrimary, // Fondo del texto
    paddingHorizontal: 5, // Espacio horizontal alrededor del texto
    fontSize: 16, // Tamaño del texto
    color: COLORS.primary, // Color del texto
    zIndex: 1, // Para que esté por encima del borde
  },

  inPut: {
    flex: 1,
    color: COLORS.textPrimary,
    width: '100%'
  },

  icon: {
    marginRight: 10,
    color: COLORS.primary,
  },


  footer: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    justifyContent: "flex-end", // Esto centrará los elementos verticalmente en el medio
    alignItems: 'center', // Esto centrará los elementos horizontalmente
    marginBottom: 30,
  },

  label: {
    marginLeft: 3,
    marginRight: 3,
  },


  suggest: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  checkbox: {
    marginRight: 5
  },

  text: {
    color: COLORS.textPrimary,
    fontSize: 16,
  },

  socialNetworks: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },

  socialNetworkIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10, // Ajusta el valor según el espacio deseado entre elementos
    alignItems: "center",
  },

  signUp: {
    flexDirection: "row",
    marginTop: 30,

  },
});

