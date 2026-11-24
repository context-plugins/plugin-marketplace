import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HasReply = {
  True: "true",
  False: "false",
} as const;
export type HasReply = (typeof HasReply)[keyof typeof HasReply] | (string & {});

export const hasReplySchema: EnumSchema<HasReply> = s.enumOf<HasReply>(HasReply);
