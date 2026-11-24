import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = Delete 1 = Awaiting 5 = Approved 9 = Void */
export const JournalEntryStatus = {
  _0: 0,
  _1: 1,
  _5: 5,
  _9: 9,
} as const;
export type JournalEntryStatus = (typeof JournalEntryStatus)[keyof typeof JournalEntryStatus] | (number & {});

export const journalEntryStatusSchema: EnumSchema<JournalEntryStatus> =
  s.enumOf<JournalEntryStatus>(JournalEntryStatus);
