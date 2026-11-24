import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FailedRowSamplesDto = {
  enabled?: boolean;
  sampleSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedRowSamplesDtoSchema: Schema<FailedRowSamplesDto> = s.object<FailedRowSamplesDto>(
  {
    enabled: s.optional(s.boolean()),
    sampleSize: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
