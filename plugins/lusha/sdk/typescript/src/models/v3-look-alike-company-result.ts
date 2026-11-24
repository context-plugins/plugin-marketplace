import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  employeeCountLushaLookalikesApiSchema,
  type EmployeeCountLushaLookalikesApi,
} from "./employee-count-lusha-lookalikes-api.js";
import { locationSchema, type Location } from "./location.js";
import { socialLinksSchema, type SocialLinks } from "./social-links.js";

export type V3LookAlikeCompanyResult = {
  id?: string;
  name?: string;
  domain?: string;
  employeeCount?: EmployeeCountLushaLookalikesApi;
  industry?: string;
  location?: Location;
  socialLinks?: SocialLinks;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3LookAlikeCompanyResultSchema: Schema<V3LookAlikeCompanyResult> =
  s.object<V3LookAlikeCompanyResult>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
      employeeCount: s.optional(s.lazy(() => employeeCountLushaLookalikesApiSchema)),
      industry: s.optional(s.string()),
      location: s.optional(s.lazy(() => locationSchema)),
      socialLinks: s.optional(s.lazy(() => socialLinksSchema)),
    },
    { additionalProperties: s.json() },
  );
