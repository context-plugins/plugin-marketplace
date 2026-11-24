import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SourceInsightsApi = {
  pointer?: string;
  parameter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceInsightsApiSchema: Schema<SourceInsightsApi> = s.object<SourceInsightsApi>(
  {
    pointer: s.optional(s.string()),
    parameter: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
