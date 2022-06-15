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

  it('should handle onClearValue action', () => {
    const initialState = {
      boolean: false,
      string: '',
      number: 0,
      object: {},
      array: [] 
    }

    const { result } = renderHook(() => useDictionary(initialState))

    act(() => {
      result.current.onClearValue('boolean')
      result.current.onClearValue('string')
      result.current.onClearValue('number')
      result.current.onClearValue('object')
      result.current.onClearValue('array')
    })
    expect(result.current.state.boolean).toBeUndefined()
    expect(result.current.state.string).toBeUndefined()
    expect(result.current.state.number).toBeUndefined()
    expect(result.current.state.object).toBeUndefined()
    expect(result.current.state.array).toBeUndefined()
  })

  it('should handle onClear action', () => {
    const initialState = {
      boolean: false,
      string: '',
      number: 0,
      object: {},
      array: [] 
    }

    const { result } = renderHook(() => useDictionary(initialState))

    act(() => {
      result.current.onClear()
    })
    expect(result.current.state).toMatchObject({})
  })

  it('should handle onToggleValue action', () => {
    const initialState = {
      boolean1: false,
      boolean2: true,
      boolean3: false,
      boolean4: true,
    }

    const { result } = renderHook(() => useDictionary(initialState))

    act(() => {
      result.current.onToggleValue('boolean1')
      result.current.onToggleValue('boolean2')
      result.current.onToggleValue('boolean3')
      result.current.onToggleValue('boolean4')
    })
    expect(result.current.state.boolean1).toBeTruthy()
    expect(result.current.state.boolean2).toBeFalsy()
    expect(result.current.state.boolean3).toBeTruthy()
    expect(result.current.state.boolean4).toBeFalsy()
  })
})