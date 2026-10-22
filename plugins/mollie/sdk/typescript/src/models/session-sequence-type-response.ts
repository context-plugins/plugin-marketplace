import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SessionSequenceTypeResponse = {
  Oneoff: "oneoff",
  First: "first",
} as const;
export type SessionSequenceTypeResponse =
  | (typeof SessionSequenceTypeResponse)[keyof typeof SessionSequenceTypeResponse]
  | (string & {});

export const sessionSequenceTypeResponseSchema: EnumSchema<SessionSequenceTypeResponse> =
  s.enumOf<SessionSequenceTypeResponse>(SessionSequenceTypeResponse);
