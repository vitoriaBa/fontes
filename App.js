import { Text, SafeAreaView, StyleSheet, ScrollView, View, Image } from 'react-native';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';
import { Abel_400Regular } from '@expo-google-fonts/abel';
import { ShantellSans_500Medium } from '@expo-google-fonts/shantell-sans';
import { Sono_600SemiBold } from '@expo-google-fonts/sono';
import { EduQLDBeginner_500Medium } from '@expo-google-fonts/edu-qld-beginner';
import { Silkscreen_400Regular, Silkscreen_700Bold } from '@expo-google-fonts/silkscreen';
import { YujiMai_400Regular } from '@expo-google-fonts/yuji-mai';
import { Yomogi_400Regular } from '@expo-google-fonts/yomogi';
import { ZhiMangXing_400Regular } from '@expo-google-fonts/zhi-mang-xing';
import { ZenTokyoZoo_400Regular } from '@expo-google-fonts/zen-tokyo-zoo';



export default function App() {
  //array ela vai receber as fontes 
  let [fontsLoaded, fontError] = useFonts({
    Bangers_400Regular, Abel_400Regular, ShantellSans_500Medium, Sono_600SemiBold, EduQLDBeginner_500Medium,
    Silkscreen_400Regular, Silkscreen_700Bold,YujiMai_400Regular, Yomogi_400Regular,ZhiMangXing_400Regular,ZenTokyoZoo_400Regular
  });

  //se a  fontes nao existi 
  if (!fontsLoaded && !fontError) {
    return null;
  }






  return (
    
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.Fonts}>

          <Image 
            style={styles.Img}
            //resizeMode="strech"
            source={require('./assets/ti.png')}
          />
          <Text style={styles.Subtext}> frase motivacionais :)</Text>
          

        <Text style={styles.Frase0}>
          Aluno de informática não cola, faz backup.
        </Text>
        <Text style={styles.Subtext}> "Natália Alves"</Text>

        <Text style={styles.Frase1}>
          O que a nova tecnologia faz é criar novas oportunidades para fazer um trabalho que os clientes querem feito.
        </Text>
        <Text style={styles.Subtext}> " Tim O’Reilly"</Text>


        <Text style={styles.Frase2}>
          Tecnologia como arte é um exercício crescente da imaginação humana.
        </Text>
        <Text style={styles.Subtext}> "Daniel Bell"</Text>


        <Text style={styles.Frase3}>
          Eu não falhei. Acabei de encontrar 10.000 maneiras que não funcionam.
        </Text>
        <Text style={styles.Subtext}> " Thomas Edison"</Text>


        <Text style={styles.Frase4}>
          Não é que usamos a tecnologia, nós vivemos tecnologia
        </Text>
        <Text style={styles.Subtext}> "Godfrey Reggio"</Text>

        <Text style={styles.Frase5}>
          A tecnologia que você usa não impressiona ninguém. A experiência que você cria com ela que é tudo.
        </Text>
        <Text style={styles.Subtext}> "Sean Gerety"</Text>

       <Text style={styles.Frase6}>
         Programar é pedir com carinho para o computador fazer alguma coisa.</Text>
        <Text style={styles.Subtext}> " Roberto Moura"</Text>

        <Text style={styles.Frase7}>
         A tecnologia é melhor quando une as pessoas.</Text>
        <Text style={styles.Subtext}> " Matt Mullenweg"</Text>


        <Text style={styles.Frase8}>
        Nem toda memória de computador existente é suficiente para salvar o mundo.</Text>
        <Text style={styles.Subtext}> "Swami Raddhi Jyotirmay"</Text>


        <Text style={styles.Frase9}>
        Nosso negócio é sobre tecnologia, sim. Mas também se trata de operações e relacionamento com clientes. </Text>
        <Text style={styles.Subtext}> "Michael Dell"</Text>


        <Text style={styles.Frase10}>
         Quando uma nova tecnologia passa por você, se você não faz parte dela, fará parte do caminho.</Text>
        <Text style={styles.Subtext}> " Stewart Brand"</Text>

      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
Img:{
  width:200,
  height:205,
},
  
  Fonts: {
    alignItems: 'center',
    marginBottom:40,
   marginLeft:20,
   marginRight:20,
   marginTop:40,
    textAlign: 'center',
    color:'#FFFFFF',
  },
  Subtext:{
    fontWeight:'bold',
    fontSize:18,

  },
  Frase0: {
    color:'#FFFFFF',
    paddingTop: 80,
    fontSize: 20,
    fontFamily: 'Bangers_400Regular'
  },
  Frase1: {
    color:'#FFFFFF',
    paddingTop: 80,
    fontSize: 20,
    fontFamily: 'Abel_400Regular'
  },
  Frase2: {
    color:'#FFFFFF',
   paddingTop: 80,
    fontSize: 20,
    fontFamily: 'ShantellSans_500Medium'
  },
  Frase3: {
    color:'#FFFFFF',
     paddingTop: 80,
    fontSize: 20,
    fontFamily: 'Sono_600SemiBold'
  },
  Frase4: {
    color:'#FFFFFF',
     paddingTop: 80,
    fontSize: 20,
    fontFamily: 'EduQLDBeginner_500Medium'
  },
  Frase5: {
    color:'#FFFFFF',
    paddingTop: 80,
    fontSize: 20,
    fontFamily: 'Silkscreen_400Regular'
  },

   Frase6: {
    color:'#FFFFFF',
     paddingTop: 80,
    fontSize: 20,
    fontFamily: 'Silkscreen_700Bold'
  },

 Frase7: {
    color:'#FFFFFF',
     paddingTop: 80,
    fontSize: 20,
    fontFamily: 'YujiMai_400Regular'
  },

   Frase8: {
    color:'#FFFFFF',
    marginTop: 80,
    fontSize: 20,
    fontFamily: 'Yomogi_400Regular'
  },

 Frase9: {
    color:'#FFFFFF',
     paddingTop: 80,
    fontSize: 30,
    fontFamily: 'ZhiMangXing_400Regular'
  },

   Frase10: {
    color:'#FFFFFF',
     paddingTop: 80,
    fontSize: 30,
    fontFamily: 'ZenTokyoZoo_400Regular'
  },
});
