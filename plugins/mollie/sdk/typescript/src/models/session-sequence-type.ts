import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionSequenceType = {
  Oneoff: "oneoff",
  First: "first",
} as const;
export type SessionSequenceType =
  | (typeof SessionSequenceType)[keyof typeof SessionSequenceType]
  | (string & {});

export const sessionSequenceTypeSchema: EnumSchema<SessionSequenceType> =
  s.enumOf<SessionSequenceType>(SessionSequenceType);
