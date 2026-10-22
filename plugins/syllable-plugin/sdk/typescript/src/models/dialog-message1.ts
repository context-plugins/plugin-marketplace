import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Dialog message */
export type DialogMessage1 = {
  /** Dialog message text */
  text: string;
};

export const dialogMessage1Schema: Schema<DialogMessage1> = s.object<DialogMessage1>({
  text: s.string(),
});
