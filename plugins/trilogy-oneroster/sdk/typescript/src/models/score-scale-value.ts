import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoreScaleValue = {
  itemValueLhs: string;
  itemValueRhs: string;
  value?: string;
  description?: string;
};

export const scoreScaleValueSchema: Schema<ScoreScaleValue> = s.object<ScoreScaleValue>({
  itemValueLhs: s.string(),
  itemValueRhs: s.string(),
  value: s.optional(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    itemValueLhs: "itemValueLHS",
    itemValueRhs: "itemValueRHS",
  },
});
