import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Feature = {
  /** The feature ID */
  id?: string;
  /** The feature display name */
  displayName?: string;
  /** The feature description */
  description?: string;
  /** Whether the feature is enabled */
  enabled?: boolean;
  /** URL to documentation about the feature */
  learnMoreUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureProperties: s.Shape<Feature> = {
  id: s.optional(s.string()),
  displayName: s.optional(s.string()),
  description: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  learnMoreUrl: s.optional(s.string()),
};

export const featureInternalSchema: Schema<Feature> = s.object<Feature>(featureProperties, {
  additionalProperties: s.json(),
});

export const featureSchema: Schema<Feature> = s.lazySchema(() =>
  s.object<Feature>(
    {
      ...featureProperties,
      learnMoreUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
