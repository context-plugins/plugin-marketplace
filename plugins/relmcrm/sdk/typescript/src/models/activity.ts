import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectEnumSchema, type ObjectEnum } from "./object-enum.js";

export type Activity = {
  id?: string;
  object?: ObjectEnum;
  type?: string;
  body?: string | null;
  contactId?: string | null;
  dealId?: string | null;
  occurredAt?: string;
  customFields?: Record<string, unknown>;
  version?: number;
  mode?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activitySchema: Schema<Activity> = s.object<Activity>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => objectEnumSchema)),
    type: s.optional(s.string()),
    body: s.optionalNullable(s.string()),
    contactId: s.optionalNullable(s.string()),
    dealId: s.optionalNullable(s.string()),
    occurredAt: s.optional(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    version: s.optional(s.int()),
    mode: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    deleted: s.optional(s.boolean()),
    _keysMap: {
      contactId: "contact_id",
      dealId: "deal_id",
      occurredAt: "occurred_at",
      customFields: "custom_fields",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
