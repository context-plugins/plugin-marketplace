import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sampleUtteranceSchema, type SampleUtterance } from "./sample-utterance.js";

export type GenerateBotElementResponse = {
  /** The unique bot Id for the bot which received the response. */
  botId?: string;
  /** The unique bot version for the bot which received the response. */
  botVersion?: string;
  /** The unique locale Id for the bot which received the response. */
  localeId?: string;
  /** The unique intent Id for the bot which received the response. */
  intentId?: string;
  /** The sample utterances for the bot which received the response. */
  sampleUtterances?: SampleUtterance[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const generateBotElementResponseSchema: Schema<GenerateBotElementResponse> =
  s.object<GenerateBotElementResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      intentId: s.optional(s.string()),
      sampleUtterances: s.optional(s.array(s.lazy(() => sampleUtteranceSchema))),
    },
    { additionalProperties: s.json() },
  );
