import { act, renderHook } from '@testing-library/react-hooks'

import { useDictionary } from '..'

describe('useDictionary hook', () => {
  it('should handle onUpdateValue action', () => {
    const initialState = {
      boolean: false,
      string: '',
      number: 0,
      object: {},
      array: [] 
    }

    const { result } = renderHook(() => useDictionary(initialState))

    act(() => {
      result.current.onUpdateValue('boolean', true)
      result.current.onUpdateValue('string', 'something')
      result.current.onUpdateValue('number', 1)
      result.current.onUpdateValue('object', { id: 1 })
      result.current.onUpdateValue('array', [1, 2, 3])
    })
    expect(result.current.state.boolean).toBeTruthy()
    expect(result.current.state.string).toBe('something')
    expect(result.current.state.number).toBe(1)
    expect(result.current.state.object).toMatchObject({ id: 1 })
    expect(result.current.state.array).toHaveLength(3)
  })

  it('should handle onCleanValue action', () => {
    const initialState = {
      boolean: false,
      string: '',
      number: 0,
      object: {},
      array: [] 
    }

    const { result } = renderHook(() => useDictionary(initialState))

    act(() => {
      result.current.onCleanValue('boolean')
      result.current.onCleanValue('string')
      result.current.onCleanValue('number')
      result.current.onCleanValue('object')
      result.current.onCleanValue('array')
    })
    expect(result.current.state.boolean).toBeUndefined()
    expect(result.current.state.string).toBeUndefined()
    expect(result.current.state.number).toBeUndefined()
    expect(result.current.state.object).toBeUndefined()
    expect(result.current.state.array).toBeUndefined()
  })

})