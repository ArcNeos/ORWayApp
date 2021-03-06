import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerWeb: {
    backgroundColor: '#fff',
    margin: 0
  },
  focus: {
    color: 'red',
    marginLeft: 20
  },
  helpDialog: {
    textAlign: "justify"
  },
  icon: {
    marginTop: '50px',
  },
  listView: {
    backgroundColor: '#4682B4',
    borderWidth: 1,
    padding: 10,
    height: 60,
    flexDirection: 'row',
    textAlign: 'center',
    borderColor: '#000',
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  listViewWeb: {
    backgroundColor: '#4682B4',
    borderWidth: 1,
    padding: 10,
    height: 60,
    flexDirection: 'row',
    textAlign: 'center',
    borderColor: '#000',
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    width: '50%',
    marginLeft: 90
  },
  textList: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textButton: {
    fontWeight: 'bold',
    color: 'black'
  },
  flatView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  titulo: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    fontWeight: "bold",
    fontSize: 18,
    textAlign: 'center',
  },
  titlePage: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 15,
    fontSize: 20,
    backgroundColor: "#857676",
    textAlign: 'center',
  },
  titlePageMain: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingTop: 15,
    width: 250,
    fontSize: 20,
    backgroundColor: "#857676",
    textAlign: 'center',
  },
  helpBox: {
    backgroundColor: "#B0C4DE",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    fontSize: 16,
    textAlign: 'justify'
  },
  textBox: {
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "#C0C0C0",
    fontSize: 18,
  },
  editBox: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  imagem: {
    borderWidth: 2,
    alignSelf: 'center',
    width: 280,
    height: 180,
    resizeMode: 'contain',
    marginVertical: '10%',
  },
  imagemLogoMenor: {
    borderWidth: 2,
    alignSelf: 'center',
    width: 300,
    height: 72,
    marginBottom: '20%',
    resizeMode: 'contain',
    marginVertical: '10%',
  },
  btnNext: {
    marginBottom: 60,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    backgroundColor: '#0EB92F',
    borderColor: 'black',
  },
  btnNextWeb: {
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    backgroundColor: '#0EB92F',
    borderColor: 'black',
  },
  btnSaveEdit: {
    marginBottom: 5,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    backgroundColor: '#0EB92F',
    borderColor: 'black',
  },
  btnEdit: {
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: '20%',
    paddingTop: 8,
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    backgroundColor: '#DAA520',
    borderColor: 'black',
  },
  btnEditWeb: {
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: '5%',
    marginVertical: 'center',
    flexDirection: "row",
    justifyContent: 'space-around',
    paddingTop: 5,
    height: 50,
    backgroundColor: '#DAA520',
    borderColor: 'black',
  },
  updateList: {
    backgroundColor: '#DAA520',
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    borderColor: 'black',
  },
  updateReview: {
    backgroundColor: '#4682B4',
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    borderColor: 'black',
  },
  updateTex: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 10
  },
  btnBack: {
    marginBottom: 60,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    height: 50,
    backgroundColor: '#E66008',
    borderColor: 'black',
  },
  linha: {
    marginLeft: 20,
    fontWeight: 'bold',
  },
  respostaNaoOtima: {
    backgroundColor: '#8B0000',
    color: 'white',
    fontWeight: "bold",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  respostaOtima: {
    backgroundColor: '#32CD32',
    color: 'white',
    fontWeight: "bold",
    marginLeft: 20,
    padding: 10,
    marginBottom: 20,
    marginRight: 20,
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  resposta: {
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  combobox: {
    height: 50,
    width: '80%',
    marginLeft: 20,
  },
  rightDelete: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20
  },
  rightDeleteWeb: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    marginTop: 10
  },
  leftDelete: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  delete: {
    color: '#FFF',
    fontSize: 18,
    margin: 10,
  },
  icon: {
    marginLeft: 20
  },
  desc: {
    padding: 20,
    fontSize: 16,
    textAlign: 'justify'
  }
});