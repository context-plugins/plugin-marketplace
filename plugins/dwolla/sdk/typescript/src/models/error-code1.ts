import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Verification directive that was simulated. */
export const ErrorCode1 = {
  PersonalIdRequired: "PersonalIDRequired",
  PoBoxNotAllowed: "POBoxNotAllowed",
  AddressNotAssociatedWithBusiness: "AddressNotAssociatedWithBusiness",
  EinDocumentRequired: "EINDocumentRequired",
} as const;
export type ErrorCode1 = (typeof ErrorCode1)[keyof typeof ErrorCode1] | (string & {});

export const errorCode1Schema: EnumSchema<ErrorCode1> = s.enumOf<ErrorCode1>(ErrorCode1);
