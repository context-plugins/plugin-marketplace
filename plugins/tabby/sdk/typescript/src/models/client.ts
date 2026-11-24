import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Client = {
  fullName?: string;
  firstName: string;
  lastName: string;
  /** ISO 8601 date of birth, e.g. 2018-10-17 */
  dob?: string;
  documentType: string;
  documentId?: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  expirationIdDt?: string;
  nationality?: string;
  /** F - female, M - male, O - other */
  gender?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clientSchema: Schema<Client> = s.object<Client>(
  {
    fullName: s.optional(s.string()),
    firstName: s.string(),
    lastName: s.string(),
    dob: s.optional(s.string()),
    documentType: s.string(),
    documentId: s.optional(s.string()),
    expirationIdDt: s.optional(s.dateOnly()),
    nationality: s.optional(s.string()),
    gender: s.optional(s.record(s.string(), s.unknown())),
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
