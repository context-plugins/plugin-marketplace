import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThrottlingException = {
  message: string;
  /** The code of the quota that was exceeded, causing the throttling exception. */
  quotaCode?: string;
  /** The code of the service that caused the throttling exception. */
  serviceCode?: string;
  /**
   * The number of seconds after which the action that caused the throttling exception can be
   * retried.
   */
  retryAfterSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const throttlingExceptionSchema: Schema<ThrottlingException> = s.object<ThrottlingException>(
  {
    message: s.string(),
    quotaCode: s.optional(s.string()),
    serviceCode: s.optional(s.string()),
    retryAfterSeconds: s.optional(s.int()),
    _keysMap: {
      message: "Message",
      quotaCode: "QuotaCode",
      serviceCode: "ServiceCode",
      retryAfterSeconds: "RetryAfterSeconds",
    },
  },
  { additionalProperties: s.json() },
);
