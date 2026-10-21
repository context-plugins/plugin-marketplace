import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OpenSettlementId = {
  Open: "open",
} as const;
export type OpenSettlementId = (typeof OpenSettlementId)[keyof typeof OpenSettlementId] | (string & {});

export const openSettlementIdSchema: EnumSchema<OpenSettlementId> =
  s.enumOf<OpenSettlementId>(OpenSettlementId);
