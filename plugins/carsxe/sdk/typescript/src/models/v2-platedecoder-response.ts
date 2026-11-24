import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V2PlatedecoderResponse = {
  success?: boolean;
  input?: Record<string, unknown>;
  description?: string;
  make?: string;
  model?: string;
  trim?: string;
  vin?: string;
  year?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2PlatedecoderResponseSchema: Schema<V2PlatedecoderResponse> = s.object<V2PlatedecoderResponse>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    description: s.optional(s.string()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    trim: s.optional(s.string()),
    vin: s.optional(s.string()),
    year: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
