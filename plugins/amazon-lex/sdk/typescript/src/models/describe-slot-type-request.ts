import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeSlotTypeRequest = {
  /** The identifier of the slot type. */
  slotTypeId: string;
  /** The identifier of the bot associated with the slot type. */
  botId: string;
  /** The version of the bot associated with the slot type. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the slot type to describe. The string must match
   * one of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSlotTypeRequestSchema: Schema<DescribeSlotTypeRequest> =
  s.object<DescribeSlotTypeRequest>(
    {
      slotTypeId: s.string(),
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
    },
    { additionalProperties: s.json() },
  );
