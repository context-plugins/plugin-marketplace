import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Used to combine dimension values to a single dimension. */
export type ConcatenateExpression = {
  /**
   * The delimiter placed between dimension names. Delimiters are often single characters such as
   * "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be
   * present in response with no distinction. For example if dimension 1 value = "US,FR", dimension
   * 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP".
   */
  delimiter?: string;
  /**
   * Names of dimensions. The names must refer back to names in the dimensions field of the request.
   */
  dimensionNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const concatenateExpressionSchema: Schema<ConcatenateExpression> = s.object<ConcatenateExpression>(
  {
    delimiter: s.optional(s.string()),
    dimensionNames: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
