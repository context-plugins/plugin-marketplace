import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexDeleteUtterancesRequest = {
  /** The name of the bot that stored the utterances. */
  botName: string;
  /**
   * The unique identifier for the user that made the utterances. This is the user ID that was sent
   * in the PostContent or PostText operation request that contained the utterance.
   */
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexDeleteUtterancesRequestSchema: Schema<ModelsLexDeleteUtterancesRequest> =
  s.object<ModelsLexDeleteUtterancesRequest>(
    {
      botName: s.string(),
      userId: s.string(),
    },
    { additionalProperties: s.json() },
  );
