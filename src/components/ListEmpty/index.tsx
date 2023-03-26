import { Image, Text, View } from 'react-native'

import clipboard from '../../assets/clipboard.png'
import { styles } from './styles'

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />
      <View>
        <Text style={styles.textOne}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textTwo}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
