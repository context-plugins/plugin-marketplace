import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { retryWithSchema, type RetryWith } from "./retry-with.js";
import { unavailableReasonSchema, type UnavailableReason } from "./unavailable-reason.js";

/**
 * Attached to transcript failures. Distinguishes 'this video has no captions' from 'we could not
 * check', and says whether transcribing the audio would still work.
 */
export type AiFallback = {
  /**
   * True when retrying the same request with ai_fallback:true would actually start a transcription.
   */
  available: boolean;
  /**
   * True only when we reached the video and confirmed no caption track exists. False means we could
   * not check, NOT that captions exist.
   */
  captionsUnavailable: boolean;
  /** Present when available is false: why AI transcription cannot be used. */
  unavailableReason?: UnavailableReason;
  message: string;
  /** Merge into the original request body to trigger the fallback. */
  retryWith?: RetryWith;
  /**
   * Credits charged on successful delivery. Failures are free. AI transcription bills by audio
   * length, so this is an estimate from the measured media length when cost_estimated is true, and
   * otherwise the one-block minimum.
   */
  costCredits?: number;
  /**
   * True when cost_credits came from the media's real duration; false when it is only the minimum,
   * because the length was not known at that point.
   */
  costEstimated?: boolean;
  /** Remaining balance; null for admins. */
  balance?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aiFallbackSchema: Schema<AiFallback> = s.object<AiFallback>(
  {
    available: s.boolean(),
    captionsUnavailable: s.boolean(),
    unavailableReason: s.optional(s.lazy(() => unavailableReasonSchema)),
    message: s.string(),
    retryWith: s.optional(s.lazy(() => retryWithSchema)),
    costCredits: s.optional(s.int()),
    costEstimated: s.optional(s.boolean()),
    balance: s.optionalNullable(s.int()),
    _keysMap: {
      captionsUnavailable: "captions_unavailable",
      unavailableReason: "unavailable_reason",
      retryWith: "retry_with",
      costCredits: "cost_credits",
      costEstimated: "cost_estimated",
    },
  },
  { additionalProperties: s.json() },
);
