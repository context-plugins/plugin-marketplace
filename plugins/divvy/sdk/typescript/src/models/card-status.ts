import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** CardStatus. */
export const CardStatus = {
  Activated: "ACTIVATED",
  NotActivated: "NOT_ACTIVATED",
  Frozen: "FROZEN",
  Deleted: "DELETED",
} as const;
export type CardStatus = (typeof CardStatus)[keyof typeof CardStatus] | (string & {});

export const cardStatusSchema: EnumSchema<CardStatus> = s.enumOf<CardStatus>(CardStatus);
