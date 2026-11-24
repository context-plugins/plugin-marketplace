import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { targetInternalSchema, targetSchema, type Target } from "./target.js";

export type FeatureConfig = {
  /** ID of the Feature owning the Configuration */
  feature: string;
  /** ID of the Environment owning the Configuration */
  environment: string;
  /** User who created the Feature Configuration */
  createdBy?: string;
  /** Status of the Feature Configuration */
  status: Status;
  /** Date the Feature Configuration was started */
  startedAt?: Date;
  /** The date the Feature Configuration was last updated */
  updatedAt: Date;
  /** The targets to evaluate what variation a user should be delivered */
  targets: Target[];
  /** Controls whether the feature configuration is editable for a given user */
  readonly: boolean;
  /**
   * Flag to indicate if the Feature owning the configuration has been marked as complete. If true,
   * the user targeting rules are ignored and the static variation is always used.
   */
  hasStaticConfig: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureConfigProperties: s.Shape<FeatureConfig> = {
  feature: s.string(),
  environment: s.string(),
  createdBy: s.optional(s.string()),
  status: statusSchema,
  startedAt: s.optional(s.dateTime()),
  updatedAt: s.dateTime(),
  targets: s.array(s.lazy(() => targetInternalSchema)),
  readonly: s.boolean(),
  hasStaticConfig: s.boolean(),
  _keysMap: {
    feature: "_feature",
    environment: "_environment",
    createdBy: "_createdBy",
  },
};

export const featureConfigInternalSchema: Schema<FeatureConfig> = s.object<FeatureConfig>(
  featureConfigProperties,
  { additionalProperties: s.json() },
);

export const featureConfigSchema: Schema<FeatureConfig> = s.lazySchema(() =>
  s.object<FeatureConfig>(
    {
      ...featureConfigProperties,
      targets: s.array(s.lazy(() => targetSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
