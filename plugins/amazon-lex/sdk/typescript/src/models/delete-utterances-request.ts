import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteUtterancesRequest = {
  /** The unique identifier of the bot that contains the utterances. */
  botId: string;
  /**
   * The identifier of the language and locale where the utterances were collected. The string must
   * match one of the supported locales. For more information, see Supported languages.
   */
  localeId?: string;
  /**
   * The unique identifier of the session with the user. The ID is returned in the response from the
   * RecognizeText and RecognizeUtterance operations.
   */
  sessionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteUtterancesRequestSchema: Schema<DeleteUtterancesRequest> =
  s.object<DeleteUtterancesRequest>(
    {
      botId: s.string(),
      localeId: s.optional(s.string()),
      sessionId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
