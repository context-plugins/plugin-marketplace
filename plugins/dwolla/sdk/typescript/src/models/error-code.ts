import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Verification directive to simulate for the linked customer. */
export const ErrorCode = {
  PersonalIdRequired: "PersonalIDRequired",
  PoBoxNotAllowed: "POBoxNotAllowed",
  AddressNotAssociatedWithBusiness: "AddressNotAssociatedWithBusiness",
  EinDocumentRequired: "EINDocumentRequired",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
