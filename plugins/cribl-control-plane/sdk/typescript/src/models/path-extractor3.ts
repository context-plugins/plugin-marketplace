import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PathExtractor3 = {
  /** A token from the template path, such as epoch */
  key: string;
  /**
   * JavaScript expression that receives token under "value" variable, and evaluates to populate
   * event fields. Example: {date: new Date(+value*1000)}
   */
  expression: string;
};

export const pathExtractor3Schema: Schema<PathExtractor3> = s.object<PathExtractor3>({
  key: s.string(),
  expression: s.string(),
});
