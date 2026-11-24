import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonSearchItem = {
  /** Stable UUID key for this person. Use with `GET /persons/{personId}/connections`. */
  personId: string;
  /** Full display name of the person. */
  displayName: string | null;
  /**
   * Year of birth when known (derived from registry data; full birth date is not exposed). `null`
   * if unavailable.
   */
  birthYear: number | null;
  /** Number of distinct companies this person is linked to. */
  companyCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personSearchItemSchema: Schema<PersonSearchItem> = s.object<PersonSearchItem>(
  {
    personId: s.string(),
    displayName: s.nullable(s.string()),
    birthYear: s.nullable(s.int()),
    companyCount: s.int(),
    _keysMap: {
      personId: "person_id",
      displayName: "display_name",
      birthYear: "birth_year",
      companyCount: "company_count",
    },
  },
  { additionalProperties: s.json() },
);
