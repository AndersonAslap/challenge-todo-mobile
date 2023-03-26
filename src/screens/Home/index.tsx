import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native'
import { styles } from './styles'

import logo from '../../assets/logo.png'
import plus from '../../assets/plus.png'
import { useState } from 'react'
import { ListEmpty } from '../../components/ListEmpty'

type Task = {
  id: string
  description: string
  done: boolean
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={logo} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={[styles.inputForm, isFocused && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TouchableOpacity style={styles.buttonForm}>
          <Image source={plus} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.containerCountdown}>
          <View style={styles.containerCountdownMain}>
            <Text style={styles.countdownTextCreate}>Criadas</Text>
            <Text style={styles.countdownNumber}>0</Text>
          </View>

          <View style={styles.containerCountdownMain}>
            <Text style={styles.countdownTextDone}>Concluídas</Text>
            <Text style={styles.countdownNumber}>0</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text key={item.id}>{item.description}</Text>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </View>
    </View>
  )
}
