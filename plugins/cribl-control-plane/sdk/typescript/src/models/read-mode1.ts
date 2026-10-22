import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Read all log entries (historical and upcoming), or only upcoming, from the last entry */
export const ReadMode1 = {
  Oldest: "oldest",
  Newest: "newest",
} as const;
export type ReadMode1 = (typeof ReadMode1)[keyof typeof ReadMode1] | (string & {});

export const readMode1Schema: EnumSchema<ReadMode1> = s.enumOf<ReadMode1>(ReadMode1);
