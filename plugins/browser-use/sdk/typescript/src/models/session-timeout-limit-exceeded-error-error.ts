import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error response when session timeout exceeds the maximum allowed limit */
export type SessionTimeoutLimitExceededErrorError = {
  /** @default "Maximum session timeout is 4 hours (240 minutes)." */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionTimeoutLimitExceededErrorErrorSchema: Schema<SessionTimeoutLimitExceededErrorError> =
  s.object<SessionTimeoutLimitExceededErrorError>(
    {
      detail: s.defaulted(s.string(), "Maximum session timeout is 4 hours (240 minutes)."),
    },
    { additionalProperties: s.json() },
  );
