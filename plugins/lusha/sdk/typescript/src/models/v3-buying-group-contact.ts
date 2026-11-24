import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import { locationSchema, type Location } from "./location.js";
import { roleSchema, type Role } from "./role.js";
import { socialLinksSchema, type SocialLinks } from "./social-links.js";
import { v3CanRevealItemSchema, type V3CanRevealItem } from "./v3-can-reveal-item.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";

export type V3BuyingGroupContact = {
  id?: string;
  firstName?: string;
  lastName?: string;
  jobTitle?: JobTitle;
  company?: Company;
  location?: Location;
  socialLinks?: SocialLinks;
  has?: string[];
  canReveal?: V3CanRevealItem[];
  /** Persona role(s) the model assigned to this contact. */
  roles?: Role[];
  /** Relevance score for the assigned role(s). */
  score?: number;
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3BuyingGroupContactProperties: s.Shape<V3BuyingGroupContact> = {
  id: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
  company: s.optional(s.lazy(() => companySchema)),
  location: s.optional(s.lazy(() => locationSchema)),
  socialLinks: s.optional(s.lazy(() => socialLinksSchema)),
  has: s.optional(s.array(s.string())),
  canReveal: s.optional(s.array(s.lazy(() => v3CanRevealItemSchema))),
  roles: s.optional(s.array(s.lazy(() => roleSchema))),
  score: s.optional(s.float64()),
  error: s.optional(s.lazy(() => v3ItemErrorSchema)),
};

export const v3BuyingGroupContactInternalSchema: Schema<V3BuyingGroupContact> =
  s.object<V3BuyingGroupContact>(v3BuyingGroupContactProperties, { additionalProperties: s.json() });

export const v3BuyingGroupContactSchema: Schema<V3BuyingGroupContact> = s.lazySchema(() =>
  s.object<V3BuyingGroupContact>(
    {
      ...v3BuyingGroupContactProperties,
      score: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
