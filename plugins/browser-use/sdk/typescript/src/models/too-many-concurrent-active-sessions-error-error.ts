import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error response when user has too many concurrent active sessions */
export type TooManyConcurrentActiveSessionsErrorError = {
  /**
   * @default "Too many concurrent active sessions. Please wait for one to finish, kill one, or
   * upgrade your plan."
   */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tooManyConcurrentActiveSessionsErrorErrorSchema: Schema<TooManyConcurrentActiveSessionsErrorError> =
  s.object<TooManyConcurrentActiveSessionsErrorError>(
    {
      detail: s.defaulted(
        s.string(),
        "Too many concurrent active sessions. Please wait for one to finish, kill one, or upgrade your plan.",
      ),
    },
    { additionalProperties: s.json() },
  );
