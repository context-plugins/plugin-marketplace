import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a score scale. */
export type ScoreScale4 = {
  sourcedId: string;
};

export const scoreScale4Schema: Schema<ScoreScale4> = s.object<ScoreScale4>({
  sourcedId: s.string(),
});
