import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aiFallbackSchema, type AiFallback } from "./ai-fallback.js";
import { errorSchema, type Error } from "./error.js";

export type ErrorEnvelopeError = {
  /** @default "False" */
  ok?: "False";
  requestId: string;
  error: Error;
  /**
   * Structured failure reason on transcript endpoints (no_captions, captions_disabled,
   * age_restricted, rate_limited, …).
   */
  reason?: string;
  /**
   * Attached to transcript failures. Distinguishes 'this video has no captions' from 'we could not
   * check', and says whether transcribing the audio would still work.
   */
  aiFallback?: AiFallback;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorEnvelopeErrorSchema: Schema<ErrorEnvelopeError> = s.object<ErrorEnvelopeError>(
  {
    ok: s.defaulted(s.literal("False"), "False"),
    requestId: s.string(),
    error: errorSchema,
    reason: s.optional(s.string()),
    aiFallback: s.optional(s.lazy(() => aiFallbackSchema)),
    _keysMap: {
      requestId: "request_id",
      aiFallback: "ai_fallback",
    },
  },
  { additionalProperties: s.json() },
);
