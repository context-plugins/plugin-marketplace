import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to group the utterances by their text or their state. */
export const Name20 = {
  UtteranceText: "UtteranceText",
  UtteranceState: "UtteranceState",
} as const;
export type Name20 = (typeof Name20)[keyof typeof Name20] | (string & {});

export const name20Schema: EnumSchema<Name20> = s.enumOf<Name20>(Name20);
