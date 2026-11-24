import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Validity and status of a single API key. */
export type ApiKeyStatus = {
  /** Masked preview of the supplied API key. */
  keyPreview?: string | null;
  /** Whether the supplied API key is valid and belongs to the authenticated account. */
  valid?: boolean | null;
  /**
   * Whether the API key is enabled. A disabled ('off') key is valid but cannot be used to make
   * requests. False when the key is not valid.
   */
  enabled?: boolean | null;
  /** Whether the account owning the key has an active subscription or trial. */
  subscriptionActive?: boolean | null;
  /** Approx number of requests made with this API key in this billing cycle. */
  requestCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeyStatusSchema: Schema<ApiKeyStatus> = s.object<ApiKeyStatus>(
  {
    keyPreview: s.optionalNullable(s.string()),
    valid: s.optionalNullable(s.boolean()),
    enabled: s.optionalNullable(s.boolean()),
    subscriptionActive: s.optionalNullable(s.boolean()),
    requestCount: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
