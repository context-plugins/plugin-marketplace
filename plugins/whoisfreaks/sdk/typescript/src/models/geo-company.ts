import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GeoCompany = {
  name?: string;
  type?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geoCompanySchema: Schema<GeoCompany> = s.object<GeoCompany>(
  {
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    domain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
