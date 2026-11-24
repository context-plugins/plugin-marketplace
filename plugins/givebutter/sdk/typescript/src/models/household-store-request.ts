import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HouseholdStoreRequest = {
  name: string;
  headContactId?: number | null;
  note?: string | null;
  envelopeName?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const householdStoreRequestProperties: s.Shape<HouseholdStoreRequest> = {
  name: s.string(),
  headContactId: s.optionalNullable(s.int()),
  note: s.optionalNullable(s.string()),
  envelopeName: s.optionalNullable(s.string()),
  _keysMap: {
    headContactId: "head_contact_id",
    envelopeName: "envelope_name",
  },
};

export const householdStoreRequestInternalSchema: Schema<HouseholdStoreRequest> =
  s.object<HouseholdStoreRequest>(householdStoreRequestProperties, { additionalProperties: s.json() });

export const householdStoreRequestSchema: Schema<HouseholdStoreRequest> = s.lazySchema(() =>
  s.object<HouseholdStoreRequest>(
    {
      ...householdStoreRequestProperties,
      name: s.string().check(s.maxLength(255)),
      envelopeName: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
