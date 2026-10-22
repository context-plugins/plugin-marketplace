import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PathExtractor1 = {
  /** A token from the template directory, such as epoch */
  key: string;
  /**
   * JavaScript expression that receives token under "value" variable, and evaluates to populate
   * event fields, such as {date: new Date(+value*1000)}
   */
  expression: string;
};

export const pathExtractor1Schema: Schema<PathExtractor1> = s.object<PathExtractor1>({
  key: s.string(),
  expression: s.string(),
});
