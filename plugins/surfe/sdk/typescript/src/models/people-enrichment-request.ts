import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrichmentOptionsSchema, type EnrichmentOptions } from "./enrichment-options.js";
import { includeSurfePeopleApiSchema, type IncludeSurfePeopleApi } from "./include-surfe-people-api.js";
import {
  notificationOptionsInternalSchema,
  notificationOptionsSchema,
  type NotificationOptions,
} from "./notification-options.js";
import { personInputSchema, type PersonInput } from "./person-input.js";

export type PeopleEnrichmentRequest = {
  /**
   * People to enrich. Each entry needs at least a linkedinUrl, or firstName + lastName +
   * companyName or companyDomain.
   */
  people: PersonInput[];
  /** Which fields to retrieve. */
  include: IncludeSurfePeopleApi;
  enrichmentOptions?: EnrichmentOptions;
  notificationOptions?: NotificationOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const peopleEnrichmentRequestProperties: s.Shape<PeopleEnrichmentRequest> = {
  people: s.array(s.lazy(() => personInputSchema)),
  include: includeSurfePeopleApiSchema,
  enrichmentOptions: s.optional(s.lazy(() => enrichmentOptionsSchema)),
  notificationOptions: s.optional(s.lazy(() => notificationOptionsInternalSchema)),
};

export const peopleEnrichmentRequestInternalSchema: Schema<PeopleEnrichmentRequest> =
  s.object<PeopleEnrichmentRequest>(peopleEnrichmentRequestProperties, { additionalProperties: s.json() });

export const peopleEnrichmentRequestSchema: Schema<PeopleEnrichmentRequest> = s.lazySchema(() =>
  s.object<PeopleEnrichmentRequest>(
    {
      ...peopleEnrichmentRequestProperties,
      people: s.array(s.lazy(() => personInputSchema)).check(s.minLength(1), s.maxLength(10000)),
      notificationOptions: s.optional(s.lazy(() => notificationOptionsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
