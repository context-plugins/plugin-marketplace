import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { includeField2Schema, type IncludeField2 } from "./include-field2.js";
import { includeTypeSchema, type IncludeType } from "./include-type.js";

export type PeopleRequest = {
  /**
   * If true and the current user's people profile is missing, reads the stored SSO profile and
   * returns a minimal Person with its display name, the authenticated user's email, the same
   * obfuscatedId used by a normal self-lookup, and identityOnly set to true. If the SSO profile or
   * its name is unavailable, preserves the missing-profile error. Applies only when emailIds and
   * obfuscatedIds are empty and the request doesn't use act-as, a virtual identity, anonymous
   * authentication, or the INVALID_ENTITIES includeType. The fallback doesn't mask lookup or
   * enrichment errors and doesn't create a directory profile. Normal people profiles don't require
   * an SSO lookup.
   *
   * @default false
   */
  fallbackToAuthenticatedIdentity?: boolean;
  /**
   * The offset of the client's timezone in minutes from UTC. e.g. PDT is -420 because it's 7 hours
   * behind UTC.
   */
  timezoneOffset?: number;
  /**
   * The Person IDs to retrieve. If no IDs are requested, the current user's details are returned.
   */
  obfuscatedIds?: string[];
  /**
   * The email IDs to retrieve. The result is the deduplicated union of emailIds and obfuscatedIds.
   */
  emailIds?: string[];
  /** List of PersonMetadata fields to return (that aren't returned by default) */
  includeFields?: IncludeField2[];
  /**
   * The types of people entities to include in the response in addition to those returned by
   * default.
   */
  includeTypes?: IncludeType[];
  /** A string denoting the search surface from which the endpoint is called. */
  source?: string;
};

export const peopleRequestSchema: Schema<PeopleRequest> = s.object<PeopleRequest>({
  fallbackToAuthenticatedIdentity: s.defaulted(s.boolean(), false),
  timezoneOffset: s.optional(s.int()),
  obfuscatedIds: s.optional(s.array(s.string())),
  emailIds: s.optional(s.array(s.string())),
  includeFields: s.optional(s.array(s.lazy(() => includeField2Schema))),
  includeTypes: s.optional(s.array(s.lazy(() => includeTypeSchema))),
  source: s.optional(s.string()),
});
