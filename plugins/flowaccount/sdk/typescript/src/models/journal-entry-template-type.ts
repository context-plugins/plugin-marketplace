import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = Default 3 = DocumentCreated 5 = Payment 7 = ChequeDate 9 = TaxNoRefund 11 =
 * VATManagementHistory
 */
export const JournalEntryTemplateType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
} as const;
export type JournalEntryTemplateType =
  | (typeof JournalEntryTemplateType)[keyof typeof JournalEntryTemplateType]
  | (number & {});

export const journalEntryTemplateTypeSchema: EnumSchema<JournalEntryTemplateType> =
  s.enumOf<JournalEntryTemplateType>(JournalEntryTemplateType);
