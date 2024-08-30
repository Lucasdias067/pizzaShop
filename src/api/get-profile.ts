import { api } from '@/lib/axios'

interface getProfileResponse {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<getProfileResponse>('/me')
  return response.data
}
