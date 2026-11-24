import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeIntentRequest = {
  /** The identifier of the intent to describe. */
  intentId: string;
  /** The identifier of the bot associated with the intent. */
  botId: string;
  /** The version of the bot associated with the intent. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the intent to describe. The string must match one
   * of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeIntentRequestSchema: Schema<DescribeIntentRequest> = s.object<DescribeIntentRequest>(
  {
    intentId: s.string(),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
  },
  { additionalProperties: s.json() },
);
