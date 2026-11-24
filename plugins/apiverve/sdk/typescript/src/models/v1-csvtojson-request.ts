import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1CsvtojsonRequest = {
  /** The CSV data to convert to JSON */
  csv: string;
  /** The delimiter used in the CSV */
  delimiter?: string;
  /** Whether the first row contains column headers (default: true) */
  hasHeader?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CsvtojsonRequestSchema: Schema<V1CsvtojsonRequest> = s.object<V1CsvtojsonRequest>(
  {
    csv: s.string(),
    delimiter: s.optional(s.string()),
    hasHeader: s.optional(s.boolean()),
    _keysMap: {
      hasHeader: "has_header",
    },
  },
  { additionalProperties: s.json() },
);
