import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies the time metric by which to bin the analytics data. */
export const Name = {
  ConversationStartTime: "ConversationStartTime",
  UtteranceTimestamp: "UtteranceTimestamp",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
