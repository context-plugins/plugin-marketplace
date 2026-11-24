import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { titleSchema, type Title } from "./unions/title.js";

/**
 * Rename a session. Null clears the user-set name, so the UI falls back to the session's opening
 * task.
 */
export type SessionUpdateRequest = {
  title?: Title;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionUpdateRequestSchema: Schema<SessionUpdateRequest> = s.object<SessionUpdateRequest>(
  {
    title: s.optional(s.lazy(() => titleSchema)),
  },
  { additionalProperties: s.json() },
);
