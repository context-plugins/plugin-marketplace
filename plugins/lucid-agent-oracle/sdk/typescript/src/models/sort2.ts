import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sort2 = {
  EvidenceCount: "evidence_count",
} as const;
export type Sort2 = (typeof Sort2)[keyof typeof Sort2] | (string & {});

export const sort2Schema: EnumSchema<Sort2> = s.enumOf<Sort2>(Sort2);
