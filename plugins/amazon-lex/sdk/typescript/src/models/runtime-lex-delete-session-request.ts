import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RuntimeLexDeleteSessionRequest = {
  /** The name of the bot that contains the session data. */
  botName: string;
  /** The alias in use for the bot that contains the session data. */
  botAlias: string;
  /** The identifier of the user associated with the session data. */
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeLexDeleteSessionRequestSchema: Schema<RuntimeLexDeleteSessionRequest> =
  s.object<RuntimeLexDeleteSessionRequest>(
    {
      botName: s.string(),
      botAlias: s.string(),
      userId: s.string(),
    },
    { additionalProperties: s.json() },
  );
