import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtraParameter = {
  /** Parameter Name */
  name: string;
  /**
   * JavaScript expression to compute the parameter's value, normally enclosed in backticks
   * (`${earliest}`). If a constant, use single quotes ('earliest'). Values without delimiters
   * (earliest) are evaluated as strings.
   */
  value: string;
};

export const extraParameterSchema: Schema<ExtraParameter> = s.object<ExtraParameter>({
  name: s.string(),
  value: s.string(),
});
