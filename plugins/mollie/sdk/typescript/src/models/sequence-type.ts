import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SequenceType = {
  Oneoff: "oneoff",
  First: "first",
  Recurring: "recurring",
} as const;
export type SequenceType = (typeof SequenceType)[keyof typeof SequenceType] | (string & {});

export const sequenceTypeSchema: EnumSchema<SequenceType> = s.enumOf<SequenceType>(SequenceType);
