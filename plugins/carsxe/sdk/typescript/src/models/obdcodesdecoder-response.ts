import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObdcodesdecoderResponse = {
  success?: boolean;
  diagnosis?: string;
  date?: string;
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const obdcodesdecoderResponseSchema: Schema<ObdcodesdecoderResponse> =
  s.object<ObdcodesdecoderResponse>(
    {
      success: s.optional(s.boolean()),
      diagnosis: s.optional(s.string()),
      date: s.optional(s.string()),
      code: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
