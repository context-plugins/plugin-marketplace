import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSlotRequest = {
  /** The identifier of the slot to delete. */
  slotId: string;
  /** The identifier of the bot associated with the slot to delete. */
  botId: string;
  /** The version of the bot associated with the slot to delete. */
  botVersion: string;
  /**
   * The identifier of the language and locale that the slot will be deleted from. The string must
   * match one of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /** The identifier of the intent associated with the slot. */
  intentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSlotRequestSchema: Schema<DeleteSlotRequest> = s.object<DeleteSlotRequest>(
  {
    slotId: s.string(),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    intentId: s.string(),
  },
  { additionalProperties: s.json() },
);
