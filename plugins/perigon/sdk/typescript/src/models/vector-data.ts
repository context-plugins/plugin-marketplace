import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vector embeddings associated with the article, when requested. */
export type VectorData = {
  /** Numeric values in the vector embedding. */
  data?: number[] | null;
  /** Version of the embedding representation. */
  version?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vectorDataSchema: Schema<VectorData> = s.object<VectorData>(
  {
    data: s.optionalNullable(s.array(s.float64())),
    version: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
