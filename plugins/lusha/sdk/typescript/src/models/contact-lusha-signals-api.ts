import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyLushaSignalsApiSchema, type CompanyLushaSignalsApi } from "./company-lusha-signals-api.js";

export type ContactLushaSignalsApi = {
  id: string;
  socialLink?: string;
  fullName?: string;
  email?: string;
  companies?: CompanyLushaSignalsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactLushaSignalsApiProperties: s.Shape<ContactLushaSignalsApi> = {
  id: s.string(),
  socialLink: s.optional(s.string()),
  fullName: s.optional(s.string()),
  email: s.optional(s.string()),
  companies: s.optional(s.array(s.lazy(() => companyLushaSignalsApiSchema))),
  _keysMap: {
    socialLink: "social_link",
    fullName: "full_name",
  },
};

export const contactLushaSignalsApiInternalSchema: Schema<ContactLushaSignalsApi> =
  s.object<ContactLushaSignalsApi>(contactLushaSignalsApiProperties, { additionalProperties: s.json() });

export const contactLushaSignalsApiSchema: Schema<ContactLushaSignalsApi> = s.lazySchema(() =>
  s.object<ContactLushaSignalsApi>(
    {
      ...contactLushaSignalsApiProperties,
      socialLink: s.optional(s.string().check(s.url())),
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
