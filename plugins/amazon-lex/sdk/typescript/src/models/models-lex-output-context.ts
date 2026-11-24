import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ModelsLexOutputContext = {
  /** The name of the context. */
  name: string;
  /**
   * The number of seconds that the context should be active after it is first sent in a PostContent
   * or PostText response. You can set the value between 5 and 86,400 seconds (24 hours).
   */
  timeToLiveInSeconds: number;
  /**
   * The number of conversation turns that the context should be active. A conversation turn is one
   * PostContent or PostText request and the corresponding response from Amazon Lex.
   */
  turnsToLive: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelsLexOutputContextSchema: Schema<ModelsLexOutputContext> = s.object<ModelsLexOutputContext>(
  {
    name: s.string(),
    timeToLiveInSeconds: s.int(),
    turnsToLive: s.int(),
  },
  { additionalProperties: s.json() },
);
