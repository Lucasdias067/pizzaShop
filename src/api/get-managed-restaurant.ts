import { api } from '@/lib/axios'

export interface getManagedRestaurantResponse {
  name: string
  id: string
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<getManagedRestaurantResponse>(
    '/managed-restaurant',
  )
  return response.data
}
