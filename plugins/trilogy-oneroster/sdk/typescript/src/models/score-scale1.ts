import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScoreScale1 = {
  sourcedId: string;
};

export const scoreScale1Schema: Schema<ScoreScale1> = s.object<ScoreScale1>({
  sourcedId: s.string(),
});
