import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1JsontocsvRequest = {
  /** The JSON array to convert to CSV (must be array of objects) */
  json: string;
  /** The delimiter to use in the CSV */
  delimiter?: string;
  /** Whether to include column headers in the output (default: true) */
  includeHeader?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1JsontocsvRequestSchema: Schema<V1JsontocsvRequest> = s.object<V1JsontocsvRequest>(
  {
    json: s.string(),
    delimiter: s.optional(s.string()),
    includeHeader: s.optional(s.boolean()),
    _keysMap: {
      includeHeader: "include_header",
    },
  },
  { additionalProperties: s.json() },
);
