import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EndpointParameter = {
  /** Parameter Name */
  name: string;
  /**
   * JavaScript expression to compute the parameter's value, normally enclosed in backticks (e.g.,
   * `${earliest}`). If a constant, use single quotes (e.g., 'earliest'). Values without delimiters
   * (e.g., earliest) are evaluated as strings.
   */
  value: string;
};

export const endpointParameterSchema: Schema<EndpointParameter> = s.object<EndpointParameter>({
  name: s.string(),
  value: s.string(),
});
