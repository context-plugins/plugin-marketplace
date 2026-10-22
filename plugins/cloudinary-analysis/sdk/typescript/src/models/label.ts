import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Label = {
  label: string;
  score: number;
};

export const labelSchema: Schema<Label> = s.object<Label>({
  label: s.string(),
  score: s.float64(),
});
