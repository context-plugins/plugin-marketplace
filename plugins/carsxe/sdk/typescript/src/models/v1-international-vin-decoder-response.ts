import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1InternationalVinDecoderResponse = {
  success?: boolean;
  input?: Record<string, unknown>;
  /** Decoded vehicle attributes. */
  attributes?: Record<string, unknown>;
  timestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1InternationalVinDecoderResponseSchema: Schema<V1InternationalVinDecoderResponse> =
  s.object<V1InternationalVinDecoderResponse>(
    {
      success: s.optional(s.boolean()),
      input: s.optional(s.record(s.string(), s.unknown())),
      attributes: s.optional(s.record(s.string(), s.unknown())),
      timestamp: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
