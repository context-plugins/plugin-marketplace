import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PendingTier = {
  Pro: "PRO",
  Business: "BUSINESS",
} as const;
export type PendingTier = (typeof PendingTier)[keyof typeof PendingTier] | (string & {});

export const pendingTierSchema: EnumSchema<PendingTier> = s.enumOf<PendingTier>(PendingTier);
