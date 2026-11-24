import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** `api`: Prisma publishes replies. `read`: read only. */
export const Reply = {
  Api: "api",
  Read: "read",
} as const;
export type Reply = (typeof Reply)[keyof typeof Reply] | (string & {});

export const replySchema: EnumSchema<Reply> = s.enumOf<Reply>(Reply);
