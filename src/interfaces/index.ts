export interface IFilterItem {
  id: number
  title: string
  value: string
}

export interface IUser {
  id: number
  avatar: string
  title: string
  subtitle: string
  country: string
  score: number
}

export interface IFilters {
  country: Array<IFilterItem>
  score: Array<IFilterItem>
}
