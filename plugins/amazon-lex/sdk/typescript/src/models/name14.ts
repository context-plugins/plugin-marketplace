import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The category by which the session analytics were grouped. */
export const Name14 = {
  ConversationEndState: "ConversationEndState",
  LocaleId: "LocaleId",
} as const;
export type Name14 = (typeof Name14)[keyof typeof Name14] | (string & {});

export const name14Schema: EnumSchema<Name14> = s.enumOf<Name14>(Name14);
