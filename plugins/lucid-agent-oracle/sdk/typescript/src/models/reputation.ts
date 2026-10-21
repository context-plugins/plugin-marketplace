import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Reputation = {
  score: number;
  updatedAt: string;
};

export const reputationSchema: Schema<Reputation> = s.object<Reputation>({
  score: s.float64(),
  updatedAt: s.string(),
  _keysMap: {
    updatedAt: "updated_at",
  },
});
