import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetSessionRequest = {
  /** The identifier of the bot that contains the session data. */
  botId: string;
  /** The alias identifier in use for the bot that contains the session data. */
  botAliasId: string;
  /** The locale where the session is in use. */
  localeId: string;
  /** The identifier of the session to return. */
  sessionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSessionRequestSchema: Schema<GetSessionRequest> = s.object<GetSessionRequest>(
  {
    botId: s.string(),
    botAliasId: s.string(),
    localeId: s.string(),
    sessionId: s.string(),
  },
  { additionalProperties: s.json() },
);
