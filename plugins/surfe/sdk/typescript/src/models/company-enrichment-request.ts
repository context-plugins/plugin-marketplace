import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { company1Schema, type Company1 } from "./company1.js";
import { includeSchema, type Include } from "./include.js";
import {
  notificationOptionsInternalSchema,
  notificationOptionsSchema,
  type NotificationOptions,
} from "./notification-options.js";

export type CompanyEnrichmentRequest = {
  /** Companies to enrich, identified by domain and/or externalID. */
  companies: Company1[];
  include?: Include;
  notificationOptions?: NotificationOptions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyEnrichmentRequestProperties: s.Shape<CompanyEnrichmentRequest> = {
  companies: s.array(s.lazy(() => company1Schema)),
  include: s.optional(s.lazy(() => includeSchema)),
  notificationOptions: s.optional(s.lazy(() => notificationOptionsInternalSchema)),
};

export const companyEnrichmentRequestInternalSchema: Schema<CompanyEnrichmentRequest> =
  s.object<CompanyEnrichmentRequest>(companyEnrichmentRequestProperties, { additionalProperties: s.json() });

export const companyEnrichmentRequestSchema: Schema<CompanyEnrichmentRequest> = s.lazySchema(() =>
  s.object<CompanyEnrichmentRequest>(
    {
      ...companyEnrichmentRequestProperties,
      companies: s.array(s.lazy(() => company1Schema)).check(s.minLength(1)),
      notificationOptions: s.optional(s.lazy(() => notificationOptionsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
