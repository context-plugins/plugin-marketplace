import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnrichmentJobAccepted = {
  enrichmentId?: string;
  enrichmentCallbackUrl?: string;
  /** Estimated completion time. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const enrichmentJobAcceptedProperties: s.Shape<EnrichmentJobAccepted> = {
  enrichmentId: s.optional(s.string()),
  enrichmentCallbackUrl: s.optional(s.string()),
  message: s.optional(s.string()),
  _keysMap: {
    enrichmentId: "enrichmentID",
    enrichmentCallbackUrl: "enrichmentCallbackURL",
  },
};

export const enrichmentJobAcceptedInternalSchema: Schema<EnrichmentJobAccepted> =
  s.object<EnrichmentJobAccepted>(enrichmentJobAcceptedProperties, { additionalProperties: s.json() });

export const enrichmentJobAcceptedSchema: Schema<EnrichmentJobAccepted> = s.lazySchema(() =>
  s.object<EnrichmentJobAccepted>(
    {
      ...enrichmentJobAcceptedProperties,
      enrichmentCallbackUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
