import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Read all stored and future event logs, or only future events */
export const ReadMode = {
  Oldest: "oldest",
  Newest: "newest",
} as const;
export type ReadMode = (typeof ReadMode)[keyof typeof ReadMode] | (string & {});

export const readModeSchema: EnumSchema<ReadMode> = s.enumOf<ReadMode>(ReadMode);
