import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSchema, type Contact } from "./contact.js";

export type HouseholdResource = {
  id: number;
  name: string;
  headContactId: number | null;
  accountId: number;
  envelopeName: string | null;
  note: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  contacts?: Contact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const householdResourceSchema: Schema<HouseholdResource> = s.object<HouseholdResource>(
  {
    id: s.int(),
    name: s.string(),
    headContactId: s.nullable(s.int()),
    accountId: s.int(),
    envelopeName: s.nullable(s.string()),
    note: s.nullable(s.string()),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    contacts: s.optional(s.array(s.lazy(() => contactSchema))),
    _keysMap: {
      headContactId: "head_contact_id",
      accountId: "account_id",
      envelopeName: "envelope_name",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
