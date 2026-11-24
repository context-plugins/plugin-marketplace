import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = ImportDocument 3 = PartialPayments 5 = Batch 7 = Etax 9 = MiigratePartialPayments 11 =
 * BatchPartialPayments 13 = DepositFirst 15 = DepositLast
 */
export const DocumentReferenceTypes = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
} as const;
export type DocumentReferenceTypes =
  | (typeof DocumentReferenceTypes)[keyof typeof DocumentReferenceTypes]
  | (number & {});

export const documentReferenceTypesSchema: EnumSchema<DocumentReferenceTypes> =
  s.enumOf<DocumentReferenceTypes>(DocumentReferenceTypes);
