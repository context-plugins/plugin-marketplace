import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ViewDataResponse = {
  /**
   * Result sets keyed by query id. Each value is an array of row objects (column name → value);
   * 64-bit integers are returned as JSON strings to preserve precision.
   */
  data: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const viewDataResponseSchema: Schema<ViewDataResponse> = s.object<ViewDataResponse>(
  {
    data: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
