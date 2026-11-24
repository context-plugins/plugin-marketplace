import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether purchases execute automatically or require customer approval before the planner proceeds.
 * Configured in the DoiT Console Settings tab; this settings API is read-only.
 */
export const PurchaseMode = {
  Autonomous: "autonomous",
  RequiresApproval: "requires_approval",
} as const;
export type PurchaseMode = (typeof PurchaseMode)[keyof typeof PurchaseMode] | (string & {});

export const purchaseModeSchema: EnumSchema<PurchaseMode> = s.enumOf<PurchaseMode>(PurchaseMode);
