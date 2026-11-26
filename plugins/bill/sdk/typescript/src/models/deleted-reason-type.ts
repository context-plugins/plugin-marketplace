import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DeletedReasonType. */
export const DeletedReasonType = {
  Cancelled: "CANCELLED",
  Lost: "LOST",
  Stolen: "STOLEN",
  Misplaced: "MISPLACED",
  FraudConfirmed: "FRAUD_CONFIRMED",
  SupersededByNewOrder: "SUPERSEDED_BY_NEW_ORDER",
} as const;
export type DeletedReasonType = (typeof DeletedReasonType)[keyof typeof DeletedReasonType] | (string & {});

export const deletedReasonTypeSchema: EnumSchema<DeletedReasonType> =
  s.enumOf<DeletedReasonType>(DeletedReasonType);
