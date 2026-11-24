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

export type UpdateTargetDto = {
  /** A unique Target ID */
  id?: string;
  /** Target name */
  name?: string;
  /** Rollout sub-document describing how a Target's audience is rolled out */
  rollout?: Rollout;
  /** Specifies variation distribution percentages for features */
  distribution: TargetDistribution[];
  /** Audience model describing target segmentation. */
  audience: TargetAudience;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateTargetDtoProperties: s.Shape<UpdateTargetDto> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  rollout: s.optional(s.lazy(() => rolloutInternalSchema)),
  distribution: s.array(s.lazy(() => targetDistributionInternalSchema)),
  audience: targetAudienceInternalSchema,
  _keysMap: {
    id: "_id",
  },
};

export const updateTargetDtoInternalSchema: Schema<UpdateTargetDto> = s.object<UpdateTargetDto>(
  updateTargetDtoProperties,
  { additionalProperties: s.json() },
);

export const updateTargetDtoSchema: Schema<UpdateTargetDto> = s.lazySchema(() =>
  s.object<UpdateTargetDto>(
    {
      ...updateTargetDtoProperties,
      rollout: s.optional(s.lazy(() => rolloutSchema)),
      distribution: s.array(s.lazy(() => targetDistributionSchema)),
      audience: targetAudienceSchema,
    },
    { additionalProperties: s.json() },
  ),
);
