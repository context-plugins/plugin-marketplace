import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data2 = {
  /** Association id. */
  id?: string;
  /** Legal name. */
  name?: string;
  /** Location on the record. */
  state?: string | null;
  /** Location on the record. */
  county?: string | null;
  /** Location on the record. */
  city?: string | null;
  /** Location on the record. */
  zip?: string | null;
  /** "hoa", "condo", or "coop". */
  subtype?: string | null;
  /** Units or lots, where known. */
  unitCount?: number | null;
  /** Street address. */
  address?: string | null;
  /** Coordinates, where geocoded. */
  lat?: number | null;
  /** Coordinates, where geocoded. */
  lng?: number | null;
  /** Public contact info on the record, where present. */
  website?: string | null;
  /** Public contact info on the record, where present. */
  phone?: string | null;
  /** Whether a board member or manager has claimed this record on the platform. */
  isClaimed?: boolean;
  /** State corporate registry status (e.g. "ACTIVE"). */
  registrationStatus?: string | null;
  /** State registration document number. */
  externalDocumentNumber?: string | null;
  /** Management company of record, where known. */
  managementFirm?: string | null;
  /** Record lifecycle timestamps. */
  createdAt?: Date;
  /** Record lifecycle timestamps. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    zip: s.optionalNullable(s.string()),
    subtype: s.optionalNullable(s.string()),
    unitCount: s.optionalNullable(s.float64()),
    address: s.optionalNullable(s.string()),
    lat: s.optionalNullable(s.float64()),
    lng: s.optionalNullable(s.float64()),
    website: s.optionalNullable(s.string()),
    phone: s.optionalNullable(s.string()),
    isClaimed: s.optional(s.boolean()),
    registrationStatus: s.optionalNullable(s.string()),
    externalDocumentNumber: s.optionalNullable(s.string()),
    managementFirm: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      unitCount: "unit_count",
      isClaimed: "is_claimed",
      registrationStatus: "registration_status",
      externalDocumentNumber: "external_document_number",
      managementFirm: "management_firm",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
