import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3CompanySearchItem = {
  clientReferenceId?: string;
  id?: string;
  name?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3CompanySearchItemSchema: Schema<V3CompanySearchItem> = s.object<V3CompanySearchItem>(
  {
    clientReferenceId: s.optional(s.string()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    domain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
