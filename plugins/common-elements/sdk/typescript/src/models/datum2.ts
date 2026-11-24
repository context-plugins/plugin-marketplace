import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum2 = {
  /** Association id. */
  id?: string;
  /** Association legal name. */
  name?: string;
  /** "hoa", "condo", or "coop". */
  subtype?: string | null;
  /** Location on the association record. */
  city?: string | null;
  /** Location on the association record. */
  county?: string | null;
  /** Location on the association record. */
  state?: string | null;
  /** Location on the association record. */
  zip?: string | null;
  /** Coordinates the distance was computed from. */
  lat?: number;
  /** Coordinates the distance was computed from. */
  lng?: number;
  /** Units or lots, where known. */
  unitCount?: number | null;
  /** State registration document number. */
  externalDocumentNumber?: string | null;
  /** Distance from your centre point in metres, rounded. */
  distanceM?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum2Schema: Schema<Datum2> = s.object<Datum2>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    subtype: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    zip: s.optionalNullable(s.string()),
    lat: s.optional(s.float64()),
    lng: s.optional(s.float64()),
    unitCount: s.optionalNullable(s.float64()),
    externalDocumentNumber: s.optionalNullable(s.string()),
    distanceM: s.optional(s.float64()),
    _keysMap: {
      unitCount: "unit_count",
      externalDocumentNumber: "external_document_number",
      distanceM: "distance_m",
    },
  },
  { additionalProperties: s.json() },
);
