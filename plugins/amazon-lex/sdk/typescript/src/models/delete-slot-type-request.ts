import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteSlotTypeRequest = {
  /** The identifier of the slot type to delete. */
  slotTypeId: string;
  /** The identifier of the bot associated with the slot type. */
  botId: string;
  /** The version of the bot associated with the slot type. */
  botVersion: string;
  /**
   * The identifier of the language and locale that the slot type will be deleted from. The string
   * must match one of the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  /**
   * By default, the DeleteSlotType operations throws a ResourceInUseException exception if you try
   * to delete a slot type used by a slot. Set the skipResourceInUseCheck parameter to true to skip
   * this check and remove the slot type even if a slot uses it.
   */
  skipResourceInUseCheck?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteSlotTypeRequestSchema: Schema<DeleteSlotTypeRequest> = s.object<DeleteSlotTypeRequest>(
  {
    slotTypeId: s.string(),
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    skipResourceInUseCheck: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
