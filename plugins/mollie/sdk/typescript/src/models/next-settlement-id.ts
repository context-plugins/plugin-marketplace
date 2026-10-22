import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NextSettlementId = {
  Next: "next",
} as const;
export type NextSettlementId = (typeof NextSettlementId)[keyof typeof NextSettlementId] | (string & {});

export const nextSettlementIdSchema: EnumSchema<NextSettlementId> =
  s.enumOf<NextSettlementId>(NextSettlementId);
