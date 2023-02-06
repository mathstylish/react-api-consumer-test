import { Dictionary } from '../entities/dictionary'
import api from './api'

export const getDictWord = async (params: string): Promise<Dictionary[]> => {
  const { data } = await api.get<Dictionary[]>(params)
  return data
}
