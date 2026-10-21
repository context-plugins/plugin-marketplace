import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EndpointHeader = {
  /** Header Name */
  name: string;
  /**
   * JavaScript expression to compute the header's value, normally enclosed in backticks (e.g.,
   * `${earliest}`). If a constant, use single quotes (e.g., 'earliest'). Values without delimiters
   * (e.g., earliest) are evaluated as strings.
   */
  value: string;
};

export const endpointHeaderSchema: Schema<EndpointHeader> = s.object<EndpointHeader>({
  name: s.string(),
  value: s.string(),
});
