import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Network name. You can search in one or both networks.
 * * Select `BILL` for BILL Network
 * * Select `RPPS` for verified national vendor network
 * * Select `ALL` for both networks
 */
export const ScopeType = {
  Bill: "BILL",
  Rpps: "RPPS",
  All: "ALL",
} as const;
export type ScopeType = (typeof ScopeType)[keyof typeof ScopeType] | (string & {});

export const scopeTypeSchema: EnumSchema<ScopeType> = s.enumOf<ScopeType>(ScopeType);
