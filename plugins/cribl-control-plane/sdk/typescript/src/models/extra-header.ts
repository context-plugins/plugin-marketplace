import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtraHeader = {
  /** Header Name */
  name: string;
  /**
   * JavaScript expression to compute the header's value, normally enclosed in backticks
   * (`${earliest}`). If a constant, use single quotes ('earliest'). Values without delimiters
   * (earliest) are evaluated as strings.
   */
  value: string;
};

export const extraHeaderSchema: Schema<ExtraHeader> = s.object<ExtraHeader>({
  name: s.string(),
  value: s.string(),
});
