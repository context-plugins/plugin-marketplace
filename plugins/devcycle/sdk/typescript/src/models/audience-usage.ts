import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  audienceFeatureInternalSchema,
  audienceFeatureSchema,
  type AudienceFeature,
} from "./audience-feature.js";

export type AudienceUsage = {
  features: AudienceFeature[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const audienceUsageProperties: s.Shape<AudienceUsage> = {
  features: s.array(s.lazy(() => audienceFeatureInternalSchema)),
};

export const audienceUsageInternalSchema: Schema<AudienceUsage> = s.object<AudienceUsage>(
  audienceUsageProperties,
  { additionalProperties: s.json() },
);

export const audienceUsageSchema: Schema<AudienceUsage> = s.lazySchema(() =>
  s.object<AudienceUsage>(
    {
      ...audienceUsageProperties,
      features: s.array(s.lazy(() => audienceFeatureSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
