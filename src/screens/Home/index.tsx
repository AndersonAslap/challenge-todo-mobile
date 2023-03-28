import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'

import logo from '../../assets/logo.png'
import plus from '../../assets/plus.png'
import { useState } from 'react'
import { ListEmpty } from '../../components/ListEmpty'
import { TaskItem } from '../../components/TaskItem'

type Task = {
  id: string
  description: string
  done: boolean
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [task, setTask] = useState('')

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const quantityTaskDone = tasks.reduce((acc, item) => {
    if (item.done) {
      acc++
    }

    return acc
  }, 0)

  function handleAddTask() {
    if (task) {
      const newTask = {
        id: new Date().getTime().toString(),
        description: task,
        done: false,
      }

      setTasks((prevState) => [...prevState, newTask])
      setTask('')
    }
  }

  function handleRemoveTask(id: string) {
    Alert.alert('Remover', 'Você deseja remover esta tarefa ?', [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => {
            return prevState.filter((item) => item.id !== id)
          }),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleChangDone(id: string) {
    setTasks((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          item.done = !item.done
        }

        return item
      })
    })
  }

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
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.buttonForm} onPress={handleAddTask}>
          <Image source={plus} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.containerCountdown}>
          <View style={styles.containerCountdownMain}>
            <Text style={styles.countdownTextCreate}>Criadas</Text>
            <Text style={styles.countdownNumber}>{tasks.length}</Text>
          </View>

          <View style={styles.containerCountdownMain}>
            <Text style={styles.countdownTextDone}>Concluídas</Text>
            <Text style={styles.countdownNumber}>{quantityTaskDone}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              key={item.id}
              task={item}
              onRemove={() => handleRemoveTask(item.id)}
              onChangeDone={() => handleChangDone(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <ListEmpty />}
        />
      </View>
    </View>
  )
}
