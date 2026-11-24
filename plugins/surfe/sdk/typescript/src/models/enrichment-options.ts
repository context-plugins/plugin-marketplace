import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acceptedEmailTypeSchema, type AcceptedEmailType } from "./accepted-email-type.js";

export type EnrichmentOptions = {
  acceptedEmailType?: AcceptedEmailType;
  skipMobileEnrichmentIfNoEmailFound?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichmentOptionsSchema: Schema<EnrichmentOptions> = s.object<EnrichmentOptions>(
  {
    acceptedEmailType: s.optional(s.lazy(() => acceptedEmailTypeSchema)),
    skipMobileEnrichmentIfNoEmailFound: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
