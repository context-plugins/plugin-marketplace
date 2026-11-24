import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  object1RelmCrmCompaniesApiSchema,
  type Object1RelmCrmCompaniesApi,
} from "./object1-relm-crm-companies-api.js";

export type Company = {
  id?: string;
  object?: Object1RelmCrmCompaniesApi;
  name?: string;
  domain?: string | null;
  customFields?: Record<string, unknown>;
  version?: number;
  mode?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => object1RelmCrmCompaniesApiSchema)),
    name: s.optional(s.string()),
    domain: s.optionalNullable(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    version: s.optional(s.int()),
    mode: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    deleted: s.optional(s.boolean()),
    _keysMap: {
      customFields: "custom_fields",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
