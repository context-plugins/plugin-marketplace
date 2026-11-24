import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  createVariableDtoInternalSchema,
  createVariableDtoSchema,
  type CreateVariableDto,
} from "./create-variable-dto.js";
import {
  createVariationDtoInternalSchema,
  createVariationDtoSchema,
  type CreateVariationDto,
} from "./create-variation-dto.js";
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
import {
  updateFeatureConfigDtoInternalSchema,
  updateFeatureConfigDtoSchema,
  type UpdateFeatureConfigDto,
} from "./update-feature-config-dto.js";

export type CreateFeatureDto = {
  /**
   * Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Name of the Feature */
  name: string;
  /** Feature description. */
  description?: string;
  configurations: Record<string, UpdateFeatureConfigDto>;
  /** Feature type. */
  type?: Type2DevCycleManagementDeprecatedFeaturesV1Api;
  /** Feature tags. */
  tags?: string[];
  /** Variation configurations to be used by feature configurations. */
  variations?: CreateVariationDto[];
  /** The key of the variation that is used as the control variation for Metrics */
  controlVariation?: string;
  /** Variable definitions to be referenced in variations */
  variables?: CreateVariableDto[];
  /** Feature-level settings. */
  settings?: FeatureSettingsDto;
  /** SDK Type Visibilty Settings */
  sdkVisibility?: FeatureSdkVisibilityDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createFeatureDtoProperties: s.Shape<CreateFeatureDto> = {
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  configurations: s.record(
    s.string(),
    s.lazy(() => updateFeatureConfigDtoInternalSchema),
  ),
  type: s.optional(s.lazy(() => type2DevCycleManagementDeprecatedFeaturesV1ApiSchema)),
  tags: s.optional(s.array(s.string())),
  variations: s.optional(s.array(s.lazy(() => createVariationDtoInternalSchema))),
  controlVariation: s.optional(s.string()),
  variables: s.optional(s.array(s.lazy(() => createVariableDtoInternalSchema))),
  settings: s.optional(s.lazy(() => featureSettingsDtoInternalSchema)),
  sdkVisibility: s.optional(s.lazy(() => featureSdkVisibilityDtoSchema)),
};

export const createFeatureDtoInternalSchema: Schema<CreateFeatureDto> = s.object<CreateFeatureDto>(
  createFeatureDtoProperties,
  { additionalProperties: s.json() },
);

export const createFeatureDtoSchema: Schema<CreateFeatureDto> = s.lazySchema(() =>
  s.object<CreateFeatureDto>(
    {
      ...createFeatureDtoProperties,
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      description: s.optional(s.string().check(s.maxLength(1000))),
      configurations: s.record(
        s.string(),
        s.lazy(() => updateFeatureConfigDtoSchema),
      ),
      variations: s.optional(s.array(s.lazy(() => createVariationDtoSchema))),
      variables: s.optional(s.array(s.lazy(() => createVariableDtoSchema))),
      settings: s.optional(s.lazy(() => featureSettingsDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
