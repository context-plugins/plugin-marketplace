import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import { locationSchema, type Location } from "./location.js";
import { socialLinksSchema, type SocialLinks } from "./social-links.js";

export type V3LookAlikeContactResult = {
  id?: string;
  firstName?: string;
  lastName?: string;
  socialLinks?: SocialLinks;
  company?: Company;
  jobTitle?: JobTitle;
  location?: Location;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3LookAlikeContactResultSchema: Schema<V3LookAlikeContactResult> =
  s.object<V3LookAlikeContactResult>(
    {
      id: s.optional(s.string()),
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      socialLinks: s.optional(s.lazy(() => socialLinksSchema)),
      company: s.optional(s.lazy(() => companySchema)),
      jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
      location: s.optional(s.lazy(() => locationSchema)),
    },
    { additionalProperties: s.json() },
  );
