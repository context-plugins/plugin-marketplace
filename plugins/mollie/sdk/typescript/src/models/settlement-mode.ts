import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this entity was created in live mode or in test mode. Settlements are always in live
 * mode.
 */
export const SettlementMode = {
  Live: "live",
} as const;
export type SettlementMode = (typeof SettlementMode)[keyof typeof SettlementMode] | (string & {});

export const settlementModeSchema: EnumSchema<SettlementMode> = s.enumOf<SettlementMode>(SettlementMode);
