import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlatedecoderResponse = {
  success?: boolean;
  input?: Record<string, unknown>;
  vin?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platedecoderResponseSchema: Schema<PlatedecoderResponse> = s.object<PlatedecoderResponse>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    vin: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
