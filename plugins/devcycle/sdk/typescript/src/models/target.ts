import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rolloutInternalSchema, rolloutSchema, type Rollout } from "./rollout.js";
import {
  targetAudienceInternalSchema,
  targetAudienceSchema,
  type TargetAudience,
} from "./target-audience.js";
import {
  targetDistributionInternalSchema,
  targetDistributionSchema,
  type TargetDistribution,
} from "./target-distribution.js";

export type Target = {
  /** A unique Target ID */
  id: string;
  /** Target name */
  name?: string;
  /** Audience model describing target segmentation. */
  audience: TargetAudience;
  /** Rollout sub-document describing how a Target's audience is rolled out */
  rollout?: Rollout;
  /** Specifies variation distribution percentages for features */
  distribution: TargetDistribution[];
  /** String to bucket users into a specific variation */
  bucketingKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const targetProperties: s.Shape<Target> = {
  id: s.string(),
  name: s.optional(s.string()),
  audience: targetAudienceInternalSchema,
  rollout: s.optional(s.lazy(() => rolloutInternalSchema)),
  distribution: s.array(s.lazy(() => targetDistributionInternalSchema)),
  bucketingKey: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
};

export const targetInternalSchema: Schema<Target> = s.object<Target>(targetProperties, {
  additionalProperties: s.json(),
});

export const targetSchema: Schema<Target> = s.lazySchema(() =>
  s.object<Target>(
    {
      ...targetProperties,
      audience: targetAudienceSchema,
      rollout: s.optional(s.lazy(() => rolloutSchema)),
      distribution: s.array(s.lazy(() => targetDistributionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
