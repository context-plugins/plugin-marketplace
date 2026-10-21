import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PathExtractor2 = {
  /** A token from the template path, such as epoch */
  key: string;
  /**
   * JavaScript expression that receives token under "value" variable, and evaluates to populate
   * event fields, such as {date: new Date(+value*1000)}
   */
  expression: string;
};

export const pathExtractor2Schema: Schema<PathExtractor2> = s.object<PathExtractor2>({
  key: s.string(),
  expression: s.string(),
});
