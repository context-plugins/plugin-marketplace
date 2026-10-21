import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PathExtractor = {
  /** A token from the template path, such as epoch */
  key: string;
  /**
   * A JavaScript expression that accesses a corresponding <token> through the value variable and
   * evaluates the token to populate event fields. Example: {date: new Date(+value*1000)}
   */
  expression: string;
};

export const pathExtractorSchema: Schema<PathExtractor> = s.object<PathExtractor>({
  key: s.string(),
  expression: s.string(),
});
