import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    gap: 8,

    paddingHorizontal: 12,
    paddingVertical: 12,

    borderRadius: 8,

    marginBottom: 8,
  },
  description: {
    width: 235,

    fontWeight: '400',
    color: '#f2f2f2',
    fontSize: 14,
  },
  doneTask: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeTask: {
    width: 32,
    height: 32,
    alignContent: 'center',
    alignItems: 'center',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
})
