import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { featureSdkVisibilityDtoSchema, type FeatureSdkVisibilityDto } from "./feature-sdk-visibility-dto.js";
import {
  featureSettingsDtoInternalSchema,
  featureSettingsDtoSchema,
  type FeatureSettingsDto,
} from "./feature-settings-dto.js";
import {
  type2DevCycleManagementDeprecatedFeaturesV1ApiSchema,
  type Type2DevCycleManagementDeprecatedFeaturesV1Api,
} from "./type2-dev-cycle-management-deprecated-features-v1-api.js";
import { updateFeatureSummaryDtoSchema, type UpdateFeatureSummaryDto } from "./update-feature-summary-dto.js";

export type StaticConfiguration = {
  /**
   * Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key?: string;
  /** Name of the Feature */
  name?: string;
  /** Feature description. */
  description?: string;
  /** The static value of each variable in the feature */
  variables: Record<string, unknown>;
  /** The status of the configuration in each environment */
  environments: Record<string, unknown>;
  /** Controls whether the static configuration is editable for a given user */
  readonly: boolean;
  /** Feature type. */
  type?: Type2DevCycleManagementDeprecatedFeaturesV1Api;
  /** Feature tags. */
  tags?: string[];
  /** The key of the variation that is used as the control variation for Metrics */
  controlVariation?: string;
  /** Feature-level settings. */
  settings?: FeatureSettingsDto;
  /** SDK Type Visibilty Settings */
  sdkVisibility?: FeatureSdkVisibilityDto;
  staleness?: Record<string, unknown>;
  summary?: UpdateFeatureSummaryDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const staticConfigurationProperties: s.Shape<StaticConfiguration> = {
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  variables: s.record(s.string(), s.unknown()),
  environments: s.record(s.string(), s.unknown()),
  readonly: s.boolean(),
  type: s.optional(s.lazy(() => type2DevCycleManagementDeprecatedFeaturesV1ApiSchema)),
  tags: s.optional(s.array(s.string())),
  controlVariation: s.optional(s.string()),
  settings: s.optional(s.lazy(() => featureSettingsDtoInternalSchema)),
  sdkVisibility: s.optional(s.lazy(() => featureSdkVisibilityDtoSchema)),
  staleness: s.optional(s.record(s.string(), s.unknown())),
  summary: s.optional(s.lazy(() => updateFeatureSummaryDtoSchema)),
};

export const staticConfigurationInternalSchema: Schema<StaticConfiguration> = s.object<StaticConfiguration>(
  staticConfigurationProperties,
  { additionalProperties: s.json() },
);

export const staticConfigurationSchema: Schema<StaticConfiguration> = s.lazySchema(() =>
  s.object<StaticConfiguration>(
    {
      ...staticConfigurationProperties,
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      description: s.optional(s.string().check(s.maxLength(1000))),
      settings: s.optional(s.lazy(() => featureSettingsDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
