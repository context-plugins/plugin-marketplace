import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies whether to group the session by their end state or their locale. */
export const Name15 = {
  ConversationEndState: "ConversationEndState",
  LocaleId: "LocaleId",
} as const;
export type Name15 = (typeof Name15)[keyof typeof Name15] | (string & {});

export const name15Schema: EnumSchema<Name15> = s.enumOf<Name15>(Name15);
