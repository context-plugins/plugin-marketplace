import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reasonDevCycleManagementFeaturesV2ApiSchema,
  type ReasonDevCycleManagementFeaturesV2Api,
} from "./reason-dev-cycle-management-features-v2-api.js";

export type FeatureStalenessEntity = {
  /** Feature key */
  key: string;
  /** Feature name */
  name: string;
  /** Feature ID */
  feature: string;
  /** Staleness status */
  stale: boolean;
  /** Last updated at */
  updatedAt?: Date;
  /** If the Feature's staleness is disabled */
  disabled: boolean;
  /** Snooze staleness until date specified */
  snoozedUntil?: Date;
  /** Reason for staleness */
  reason?: ReasonDevCycleManagementFeaturesV2Api;
  /** Miscellaneous metadata */
  metaData?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureStalenessEntitySchema: Schema<FeatureStalenessEntity> = s.object<FeatureStalenessEntity>(
  {
    key: s.string(),
    name: s.string(),
    feature: s.string(),
    stale: s.boolean(),
    updatedAt: s.optional(s.dateTime()),
    disabled: s.boolean(),
    snoozedUntil: s.optional(s.dateTime()),
    reason: s.optional(s.lazy(() => reasonDevCycleManagementFeaturesV2ApiSchema)),
    metaData: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      feature: "_feature",
    },
  },
  { additionalProperties: s.json() },
);
