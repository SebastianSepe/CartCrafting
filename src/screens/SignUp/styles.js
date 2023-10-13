import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors/colors/";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.BackgroundPrimary,
  },
  
  header: {
    flex:1,
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: -6,
    //position: "relative",

  },

  headerForm: {
    position: 'absolute',
    justifyContent: "flex-end",
    width: '70%',
    height: '40%',
    top: '10%',
    backgroundColor: COLORS.primary, // Fondo con opacidad       // Añadir esta propiedad con un valor negativo
    borderTopRightRadius: 140,
    borderTopLeftRadius: 140,
    borderBottomRightRadius: 140,
    borderBottomLeftRadius: 140,
    zIndex: -5,
    borderWidth: 1,
    borderColor: 'skyblue'
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
    left: '-10%',
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
    right: '-10%',
    bottom: '30%',
    backgroundColor: COLORS.primary, // Fondo con opacidad       // Añadir esta propiedad con un valor negativo
    borderTopRightRadius: 30,
    borderTopLeftRadius: 20,
    borderWidth: 2,
    borderColor: 'skyblue',
    zIndex: -5,
  },

  
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.textLight,
    // zIndex: -3,
    // position: "absolute",
    // top: '14%',
    // left: '25%'
  },

  containerTitle: {
    flex:1,
    alignContent: "center",
    justifyContent: "center",
  },
  
  middle: {
    flex:1,
    overflow: "visible",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  
  suggest: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    

  },
  
  text: {
    color: COLORS.TextColor,
    fontSize: 16,
  },
  
  signIn: {
    marginBottom: 30,
    flexDirection: "row",
    marginTop: 30,
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

  footer: {
    flex:1,
    justifyContent: "flex-end",
   
  },
  
  signIn: {
    marginBottom: 30,
    flexDirection: "row",
    marginTop: 30,
    bottom: 0, // '00%' should be '0' to set the bottom position.
  }

});

export default styles;
