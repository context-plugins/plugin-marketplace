import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { utteranceListSchema, type UtteranceList } from "./utterance-list.js";

export type GetUtterancesViewResponse = {
  /** The name of the bot for which utterance information was returned. */
  botName?: string;
  /**
   * An array of UtteranceList objects, each containing a list of UtteranceData objects describing
   * the utterances that were processed by your bot. The response contains a maximum of 100
   * UtteranceData objects for each version. Amazon Lex returns the most frequent utterances
   * received by the bot in the last 15 days.
   */
  utterances?: UtteranceList[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getUtterancesViewResponseSchema: Schema<GetUtterancesViewResponse> =
  s.object<GetUtterancesViewResponse>(
    {
      botName: s.optional(s.string()),
      utterances: s.optional(s.array(s.lazy(() => utteranceListSchema))),
    },
    { additionalProperties: s.json() },
  );
