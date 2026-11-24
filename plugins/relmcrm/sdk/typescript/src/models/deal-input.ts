import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DealInput = {
  title: string;
  valueCents?: number;
  currency?: string;
  /** Pipeline key or pl_ id (defaults to the default pipeline). */
  pipeline?: string;
  /** Stage key within the deal's pipeline. */
  stage?: string;
  companyId?: string;
  primaryContactId?: string;
  closeDate?: string;
  customFields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dealInputSchema: Schema<DealInput> = s.object<DealInput>(
  {
    title: s.string(),
    valueCents: s.optional(s.int()),
    currency: s.optional(s.string()),
    pipeline: s.optional(s.string()),
    stage: s.optional(s.string()),
    companyId: s.optional(s.string()),
    primaryContactId: s.optional(s.string()),
    closeDate: s.optional(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      valueCents: "value_cents",
      companyId: "company_id",
      primaryContactId: "primary_contact_id",
      closeDate: "close_date",
      customFields: "custom_fields",
    },
  },
  { additionalProperties: s.json() },
);
