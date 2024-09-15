import type { NextApiRequest, NextApiResponse } from "next"

type HelloResponse = {
  name: string
}

export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  // ステータス200で{"name": "John Doe"}を返す
  res.status(200).json({ name: 'John Doe' })
}