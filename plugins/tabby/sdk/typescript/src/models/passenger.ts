import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { genderSchema, type Gender } from "./gender.js";

export type Passenger = {
  fullName?: string;
  firstName?: string;
  lastName?: string;
  /** ISO 8601 date of birth, e.g. 2018-10-17 */
  dob?: string;
  documentType?: string;
  documentId?: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  expirationIdDt?: string;
  nationality?: string;
  /** F - female, M - male, O - other */
  gender?: Gender;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const passengerSchema: Schema<Passenger> = s.object<Passenger>(
  {
    fullName: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    dob: s.optional(s.string()),
    documentType: s.optional(s.string()),
    documentId: s.optional(s.string()),
    expirationIdDt: s.optional(s.dateOnly()),
    nationality: s.optional(s.string()),
    gender: s.optional(s.lazy(() => genderSchema)),
    _keysMap: {
      fullName: "full_name",
      firstName: "first_name",
      lastName: "last_name",
      documentType: "document_type",
      documentId: "document_id",
      expirationIdDt: "expiration_id_dt",
    },
  },
  { additionalProperties: s.json() },
);
