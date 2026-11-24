import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeLexDeleteSessionResponse = {
  /** The name of the bot associated with the session data. */
  botName?: string;
  /** The alias in use for the bot associated with the session data. */
  botAlias?: string;
  /** The ID of the client application user. */
  userId?: string;
  /** The unique identifier for the session. */
  sessionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexDeleteSessionResponseSchema: Schema<RuntimeLexDeleteSessionResponse> =
  s.object<RuntimeLexDeleteSessionResponse>(
    {
      botName: s.optional(s.string()),
      botAlias: s.optional(s.string()),
      userId: s.optional(s.string()),
      sessionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
