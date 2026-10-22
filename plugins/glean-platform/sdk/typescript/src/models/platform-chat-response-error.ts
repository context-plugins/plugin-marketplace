import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformChatResponseError = {
  /**
   * Open snake_case error code aligned with ProblemDetail codes when present. Clients must tolerate
   * unknown values; the set of codes is not a closed enum. Limit failures use
   * `spend_limit_exceeded` (billing spend limit) and `token_limit_exceeded` (model context/token
   * limit).
   */
  code?: string | null;
  message: string;
};

export const platformChatResponseErrorSchema: Schema<PlatformChatResponseError> =
  s.object<PlatformChatResponseError>({
    code: s.optionalNullable(s.string()),
    message: s.string(),
  });
