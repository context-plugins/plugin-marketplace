import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verified claims validation schema set. */
export const VerifiedClaimsValidationSchema = {
  Standard: "standard",
  StandardIdDocument: "standard+id_document",
} as const;
export type VerifiedClaimsValidationSchema =
  | (typeof VerifiedClaimsValidationSchema)[keyof typeof VerifiedClaimsValidationSchema]
  | (string & {});

export const verifiedClaimsValidationSchemaSchema: EnumSchema<VerifiedClaimsValidationSchema> =
  s.enumOf<VerifiedClaimsValidationSchema>(VerifiedClaimsValidationSchema);
