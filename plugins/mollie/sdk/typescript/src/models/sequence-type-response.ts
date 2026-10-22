import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SequenceTypeResponse = {
  Oneoff: "oneoff",
  First: "first",
  Recurring: "recurring",
} as const;
export type SequenceTypeResponse =
  | (typeof SequenceTypeResponse)[keyof typeof SequenceTypeResponse]
  | (string & {});

export const sequenceTypeResponseSchema: EnumSchema<SequenceTypeResponse> =
  s.enumOf<SequenceTypeResponse>(SequenceTypeResponse);
