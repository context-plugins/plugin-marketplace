import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Answer1 = {
  id: string;
  text: string;
};

export const answer1Schema: Schema<Answer1> = s.object<Answer1>({
  id: s.string(),
  text: s.string(),
});
