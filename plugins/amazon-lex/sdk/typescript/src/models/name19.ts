import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The category by which the utterance analytics were grouped. */
export const Name19 = {
  UtteranceText: "UtteranceText",
  UtteranceState: "UtteranceState",
} as const;
export type Name19 = (typeof Name19)[keyof typeof Name19] | (string & {});

export const name19Schema: EnumSchema<Name19> = s.enumOf<Name19>(Name19);
