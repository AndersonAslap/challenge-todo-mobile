import { Image, Text, TouchableOpacity, View } from 'react-native'

import trash from '../../assets/trash.png'
import check from '../../assets/checked.png'
import unchecked from '../../assets/unchecked.png'

import { styles } from './styles'

type Props = {
  task: {
    id: string
    description: string
    done: boolean
  }
  onRemove: () => void
  onChangeDone: () => void
}

export function TaskItem({ task, onRemove, onChangeDone }: Props) {
  const { id, description, done } = task
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.doneTask} onPress={onChangeDone}>
        {task.done ? <Image source={check} /> : <Image source={unchecked} />}
      </TouchableOpacity>

      <Text style={[styles.description, done && styles.lineThrough]}>
        {description}
      </Text>

      <TouchableOpacity style={styles.removeTask} onPress={onRemove}>
        <Image source={trash} />
      </TouchableOpacity>
    </View>
  )
}
