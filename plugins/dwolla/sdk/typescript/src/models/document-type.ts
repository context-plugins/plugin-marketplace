import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentType = {
  Passport: "passport",
  License: "license",
  IdCard: "idCard",
  Other: "other",
} as const;
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType] | (string & {});

export const documentTypeSchema: EnumSchema<DocumentType> = s.enumOf<DocumentType>(DocumentType);
