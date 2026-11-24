import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";

export type Passenger1 = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  /** ISO 8601 date of birth, e.g. 2018-10-17 */
  dob?: string;
  documentType?: string;
  documentId?: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  expirationIdDate?: string;
  nationality?: string;
  /** F - female, M - male, O - other */
  gender?: Gender;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const passenger1Schema: Schema<Passenger1> = s.object<Passenger1>(
  {
    fullName: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    dob: s.optional(s.string()),
    documentType: s.optional(s.string()),
    documentId: s.optional(s.string()),
    expirationIdDate: s.optional(s.dateOnly()),
    nationality: s.optional(s.string()),
    gender: s.optional(s.lazy(() => genderSchema)),
    _keysMap: {
      fullName: "full_name",
      firstName: "first_name",
      lastName: "last_name",
      documentType: "document_type",
      documentId: "document_id",
      expirationIdDate: "expiration_id_date",
    },
  },
  { additionalProperties: s.json() },
);
