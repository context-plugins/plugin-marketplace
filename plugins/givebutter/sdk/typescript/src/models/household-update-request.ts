import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HouseholdUpdateRequest = {
  name?: string;
  headContactId?: number | null;
  note?: string | null;
  envelopeName?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const householdUpdateRequestProperties: s.Shape<HouseholdUpdateRequest> = {
  name: s.optional(s.string()),
  headContactId: s.optionalNullable(s.int()),
  note: s.optionalNullable(s.string()),
  envelopeName: s.optionalNullable(s.string()),
  _keysMap: {
    headContactId: "head_contact_id",
    envelopeName: "envelope_name",
  },
};

export const householdUpdateRequestInternalSchema: Schema<HouseholdUpdateRequest> =
  s.object<HouseholdUpdateRequest>(householdUpdateRequestProperties, { additionalProperties: s.json() });

export const householdUpdateRequestSchema: Schema<HouseholdUpdateRequest> = s.lazySchema(() =>
  s.object<HouseholdUpdateRequest>(
    {
      ...householdUpdateRequestProperties,
      name: s.optional(s.string().check(s.maxLength(255))),
      envelopeName: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
