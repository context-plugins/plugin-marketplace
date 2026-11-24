import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the intent has been Confirmed, Denied, or None if the confirmation stage has
 * not yet been reached.
 */
export const ConfirmationState = {
  Confirmed: "Confirmed",
  Denied: "Denied",
  None: "None",
} as const;
export type ConfirmationState = (typeof ConfirmationState)[keyof typeof ConfirmationState] | (string & {});

export const confirmationStateSchema: EnumSchema<ConfirmationState> =
  s.enumOf<ConfirmationState>(ConfirmationState);
