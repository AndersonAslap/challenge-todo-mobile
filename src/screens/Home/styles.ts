import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },

  containerHeader: {
    width: '100%',
    height: 173,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    width: 327,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: -28,
  },

  buttonForm: {
    width: 52,
    height: 52,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  inputForm: {
    width: 271,
    backgroundColor: '#262626',
    height: 54,
    marginRight: 10,

    borderWidth: 1,
    borderColor: '#0d0d0d',
    borderRadius: 5,
    padding: 16,

    fontSize: 16,
    color: '#f2f2f2',
  },

  inputFocused: {
    borderColor: '#5e60ce',
  },

  containerMain: {
    flex: 1,
    marginTop: 32,
    marginHorizontal: 24,
  },

  containerCountdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  containerCountdownMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  countdownTextCreate: {
    fontSize: 14,
    color: '#4ea8de',
    fontWeight: '700',
  },

  countdownTextDone: {
    fontSize: 14,
    color: '#8284fa',
    fontWeight: '700',
  },

  countdownNumber: {
    marginLeft: 8,

    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: '#808080',
    borderRadius: 999,

    fontSize: 12,
    lineHeight: 15,
    fontWeight: '700',

    color: '#d9d9d9',
  },
})
