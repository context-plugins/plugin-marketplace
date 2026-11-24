import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactResourceSchema, type ContactResource } from "./contact-resource.js";

export type AppHttpResourcesApiHouseholdResource = {
  id: number;
  name: string;
  headContactId: number | null;
  accountId: number;
  envelopeName: string | null;
  note: string | null;
  createdAt: string;
  updatedAt: string;
  contacts?: ContactResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appHttpResourcesApiHouseholdResourceSchema: Schema<AppHttpResourcesApiHouseholdResource> =
  s.object<AppHttpResourcesApiHouseholdResource>(
    {
      id: s.int(),
      name: s.string(),
      headContactId: s.nullable(s.int()),
      accountId: s.int(),
      envelopeName: s.nullable(s.string()),
      note: s.nullable(s.string()),
      createdAt: s.string(),
      updatedAt: s.string(),
      contacts: s.optional(s.array(s.lazy(() => contactResourceSchema))),
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
