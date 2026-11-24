import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { elicitSubSlotSchema, type ElicitSubSlot } from "./elicit-sub-slot.js";
import { slotElicitationStyleSchema, type SlotElicitationStyle } from "./slot-elicitation-style.js";
import { type1Schema, type Type1 } from "./type1.js";

export type RuntimeV2LexDialogAction = {
  /**
   * The next action that the bot should take in its interaction with the user. The following values
   * are possible: Close – Indicates that there will not be a response from the user. For example,
   * the statement "Your order has been placed" does not require a response. ConfirmIntent – The
   * next action is asking the user if the intent is complete and ready to be fulfilled. This is a
   * yes/no question such as "Place the order?" Delegate – The next action is determined by Amazon
   * Lex V2. ElicitIntent – The next action is to elicit an intent from the user. ElicitSlot – The
   * next action is to elicit a slot valu
   */
  type: Type1;
  /** The name of the slot that should be elicited from the user. */
  slotToElicit?: string;
  /**
   * Configures the slot to use spell-by-letter or spell-by-word style. When you use a style on a
   * slot, users can spell out their input to make it clear to your bot. Spell by letter - "b" "o"
   * "b" Spell by word - "b as in boy" "o as in oscar" "b as in boy" For more information, see Using
   * spelling to enter slot values .
   */
  slotElicitationStyle?: SlotElicitationStyle;
  subSlotToElicit?: ElicitSubSlot;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runtimeV2LexDialogActionSchema: Schema<RuntimeV2LexDialogAction> =
  s.object<RuntimeV2LexDialogAction>(
    {
      type: type1Schema,
      slotToElicit: s.optional(s.string()),
      slotElicitationStyle: s.optional(s.lazy(() => slotElicitationStyleSchema)),
      subSlotToElicit: s.optional(s.lazy(() => elicitSubSlotSchema)),
    },
    { additionalProperties: s.json() },
  );
