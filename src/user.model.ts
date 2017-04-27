export interface User {
  id: string
  email: string
  password: {
    hash: string;
    algo: HashingAlgo;
  }
}

export type HashingAlgo = 'bcrypt'
