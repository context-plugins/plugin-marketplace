import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LotSubStatus = {
  Live: "Live",
  Open: "Open",
  Ended: "Ended",
} as const;
export type LotSubStatus = (typeof LotSubStatus)[keyof typeof LotSubStatus] | (string & {});

export const lotSubStatusSchema: EnumSchema<LotSubStatus> = s.enumOf<LotSubStatus>(LotSubStatus);
