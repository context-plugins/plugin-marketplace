import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { utteranceDataSchema, type UtteranceData } from "./utterance-data.js";

export type UtteranceList = {
  /** The version of the bot that processed the list. */
  botVersion?: string;
  /**
   * One or more UtteranceData objects that contain information about the utterances that have been
   * made to a bot. The maximum number of object is 100.
   */
  utterances?: UtteranceData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceListSchema: Schema<UtteranceList> = s.object<UtteranceList>(
  {
    botVersion: s.optional(s.string()),
    utterances: s.optional(s.array(s.lazy(() => utteranceDataSchema))),
  },
  { additionalProperties: s.json() },
);
