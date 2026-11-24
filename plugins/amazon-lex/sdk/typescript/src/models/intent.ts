import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { confirmationStateSchema, type ConfirmationState } from "./confirmation-state.js";
import { slotSchema, type Slot } from "./slot.js";
import { stateSchema, type State } from "./state.js";

export type Intent = {
  /** The name of the intent. */
  name: string;
  /**
   * A map of all of the slots for the intent. The name of the slot maps to the value of the slot.
   * If a slot has not been filled, the value is null.
   */
  slots?: Record<string, Slot>;
  /**
   * Indicates the fulfillment state for the intent. The meanings of each value are as follows:
   * Failed – The bot failed to fulfill the intent. Fulfilled – The bot has completed fulfillment of
   * the intent. FulfillmentInProgress – The bot is in the middle of fulfilling the intent.
   * InProgress – The bot is in the middle of eliciting the slot values that are necessary to
   * fulfill the intent. ReadyForFulfillment – The bot has elicited all the slot values for the
   * intent and is ready to fulfill the intent. Waiting – The bot is waiting for a response from the
   * user (limited to streaming conversations).
   */
  state?: State;
  /**
   * Indicates whether the intent has been Confirmed, Denied, or None if the confirmation stage has
   * not yet been reached.
   */
  confirmationState?: ConfirmationState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentSchema: Schema<Intent> = s.object<Intent>(
  {
    name: s.string(),
    slots: s.optional(
      s.record(
        s.string(),
        s.lazy(() => slotSchema),
      ),
    ),
    state: s.optional(s.lazy(() => stateSchema)),
    confirmationState: s.optional(s.lazy(() => confirmationStateSchema)),
  },
  { additionalProperties: s.json() },
);
