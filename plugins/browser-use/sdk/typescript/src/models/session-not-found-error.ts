import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error response when a session is not found */
export type SessionNotFoundError = {
  /** @default "Session not found" */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionNotFoundErrorSchema: Schema<SessionNotFoundError> = s.object<SessionNotFoundError>(
  {
    detail: s.defaulted(s.string(), "Session not found"),
  },
  { additionalProperties: s.json() },
);
