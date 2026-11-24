import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeSlotRequest = {
  /** The unique identifier for the slot. */
  slotId: string;
  /** The identifier of the bot associated with the slot. */
  botId: string;
  /** The version of the bot associated with the slot. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the slot to describe. The string must match one of
   * the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** The identifier of the intent that contains the slot. */
  intentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSlotRequestSchema: Schema<DescribeSlotRequest> = s.object<DescribeSlotRequest>(
  {
    slotId: s.string(),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    intentId: s.string(),
  },
  { additionalProperties: s.json() },
);
