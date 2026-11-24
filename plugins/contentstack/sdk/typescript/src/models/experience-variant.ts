import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A content variant within a personalization experience. */
export type ExperienceVariant = {
  /** Unique identifier of the variant. */
  uid?: string;
  /** Display name of the variant. */
  name?: string;
  /** UID of the audience this variant targets (for SEGMENTED experiences). */
  audienceUid?: string;
  /** Percentage of traffic assigned to this variant (for AB_TEST experiences). */
  trafficPercentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const experienceVariantProperties: s.Shape<ExperienceVariant> = {
  uid: s.optional(s.string()),
  name: s.optional(s.string()),
  audienceUid: s.optional(s.string()),
  trafficPercentage: s.optional(s.float64()),
  _keysMap: {
    audienceUid: "audience_uid",
    trafficPercentage: "traffic_percentage",
  },
};

export const experienceVariantInternalSchema: Schema<ExperienceVariant> = s.object<ExperienceVariant>(
  experienceVariantProperties,
  { additionalProperties: s.json() },
);

export const experienceVariantSchema: Schema<ExperienceVariant> = s.lazySchema(() =>
  s.object<ExperienceVariant>(
    {
      ...experienceVariantProperties,
      trafficPercentage: s.optional(s.float64().check(s.gte(0), s.lte(100))),
    },
    { additionalProperties: s.json() },
  ),
);
