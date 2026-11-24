import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSessionResponse = {
  /** The identifier of the bot that contained the session data. */
  botId?: string;
  /** The alias identifier in use for the bot that contained the session data. */
  botAliasId?: string;
  /** The locale where the session was used. */
  localeId?: string;
  /** The identifier of the deleted session. */
  sessionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSessionResponseSchema: Schema<DeleteSessionResponse> = s.object<DeleteSessionResponse>(
  {
    botId: s.optional(s.string()),
    botAliasId: s.optional(s.string()),
    localeId: s.optional(s.string()),
    sessionId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
