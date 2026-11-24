import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auditLogEntitySchema, type AuditLogEntity } from "./audit-log-entity.js";
import { featureConfigInternalSchema, featureConfigSchema, type FeatureConfig } from "./feature-config.js";
import { featureCustomStatusSchema, type FeatureCustomStatus } from "./feature-custom-status.js";
import { featureSdkVisibilitySchema, type FeatureSdkVisibility } from "./feature-sdk-visibility.js";
import {
  featureSettingsInternalSchema,
  featureSettingsSchema,
  type FeatureSettings,
} from "./feature-settings.js";
import { featureSummarySchema, type FeatureSummary } from "./feature-summary.js";
import {
  sourceDevCycleManagementDeprecatedFeaturesV1ApiSchema,
  type SourceDevCycleManagementDeprecatedFeaturesV1Api,
} from "./source-dev-cycle-management-deprecated-features-v1-api.js";
import { status1Schema, type Status1 } from "./status1.js";
import {
  type2DevCycleManagementMetricAssociationsApiSchema,
  type Type2DevCycleManagementMetricAssociationsApi,
} from "./type2-dev-cycle-management-metric-associations-api.js";
import {
  variableDevCycleManagementMetricAssociationsApiInternalSchema,
  variableDevCycleManagementMetricAssociationsApiSchema,
  type VariableDevCycleManagementMetricAssociationsApi,
} from "./variable-dev-cycle-management-metric-associations-api.js";
import { variationInternalSchema, variationSchema, type Variation } from "./variation.js";

export type FeatureDevCycleManagementMetricAssociationsApi = {
  /** A unique Feature ID */
  id: string;
  /** The Project owning the Feature */
  project: string;
  /** Source that created the Feature */
  source: SourceDevCycleManagementDeprecatedFeaturesV1Api;
  /** Status of the Feature */
  status: Status1;
  /** The Feature type */
  type?: Type2DevCycleManagementMetricAssociationsApi;
  /** Name of the Feature */
  name: string;
  /**
   * Unique key by Project, can be used in the SDK / API to reference by 'key' rather than _id. Must
   * only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Feature description. */
  description?: string;
  /** ID of the User who created the Feature */
  createdBy?: string;
  /** The date the Feature was created */
  createdAt: Date;
  /** The date the Feature was last updated */
  updatedAt: Date;
  /** The date the Feature had an update that impacted production targeting */
  prodTargetingUpdatedAt?: Date;
  /** Variation configurations to be used by feature configurations. */
  variations?: Variation[];
  /** The key of the variation that is used as the control variation for Metrics */
  controlVariation: string;
  /** The key of the variation that is set when the Feature's status is set to complete */
  staticVariation?: string;
  /** Variable definitions to be referenced in variations */
  variables?: VariableDevCycleManagementMetricAssociationsApi[];
  /** Tags to organize Features on the dashboard */
  tags?: string[];
  /** A link to the feature on LaunchDarkly if it has importedByLD type */
  ldLink?: string;
  /** Controls whether the feature is editable for a given user */
  readonly: boolean;
  /** Defines feature-level settings */
  settings?: FeatureSettings;
  /** SDK Type visibility settings to filter features by platform */
  sdkVisibility?: FeatureSdkVisibility;
  /** An array of targeting configurations for the associated environments */
  configurations: FeatureConfig[];
  /**
   * Most recent audit log entry for this feature Only included in response if includeLatestUpdate
   * query param is true
   */
  latestUpdate?: AuditLogEntity;
  /** Pending change requests for this Feature */
  changeRequests?: Record<string, unknown>[];
  /** The staleness of the feature */
  staleness?: Record<string, unknown>;
  /** Custom status reference for this feature */
  customStatus?: FeatureCustomStatus;
  /** Summary details for dashboard */
  summary: FeatureSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureDevCycleManagementMetricAssociationsApiProperties: s.Shape<FeatureDevCycleManagementMetricAssociationsApi> =
  {
    id: s.string(),
    project: s.string(),
    source: sourceDevCycleManagementDeprecatedFeaturesV1ApiSchema,
    status: status1Schema,
    type: s.optional(s.lazy(() => type2DevCycleManagementMetricAssociationsApiSchema)),
    name: s.string(),
    key: s.string(),
    description: s.optional(s.string()),
    createdBy: s.optional(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    prodTargetingUpdatedAt: s.optional(s.dateTime()),
    variations: s.optional(s.array(s.lazy(() => variationInternalSchema))),
    controlVariation: s.string(),
    staticVariation: s.optional(s.string()),
    variables: s.optional(
      s.array(s.lazy(() => variableDevCycleManagementMetricAssociationsApiInternalSchema)),
    ),
    tags: s.optional(s.array(s.string())),
    ldLink: s.optional(s.string()),
    readonly: s.boolean(),
    settings: s.optional(s.lazy(() => featureSettingsInternalSchema)),
    sdkVisibility: s.optional(s.lazy(() => featureSdkVisibilitySchema)),
    configurations: s.array(s.lazy(() => featureConfigInternalSchema)),
    latestUpdate: s.optional(s.lazy(() => auditLogEntitySchema)),
    changeRequests: s.optional(s.array(s.record(s.string(), s.unknown()))),
    staleness: s.optional(s.record(s.string(), s.unknown())),
    customStatus: s.optional(s.lazy(() => featureCustomStatusSchema)),
    summary: featureSummarySchema,
    _keysMap: {
      id: "_id",
      project: "_project",
      createdBy: "_createdBy",
    },
  };

export const featureDevCycleManagementMetricAssociationsApiInternalSchema: Schema<FeatureDevCycleManagementMetricAssociationsApi> =
  s.object<FeatureDevCycleManagementMetricAssociationsApi>(
    featureDevCycleManagementMetricAssociationsApiProperties,
    { additionalProperties: s.json() },
  );

export const featureDevCycleManagementMetricAssociationsApiSchema: Schema<FeatureDevCycleManagementMetricAssociationsApi> =
  s.lazySchema(() =>
    s.object<FeatureDevCycleManagementMetricAssociationsApi>(
      {
        ...featureDevCycleManagementMetricAssociationsApiProperties,
        variations: s.optional(s.array(s.lazy(() => variationSchema))),
        variables: s.optional(s.array(s.lazy(() => variableDevCycleManagementMetricAssociationsApiSchema))),
        settings: s.optional(s.lazy(() => featureSettingsSchema)),
        configurations: s.array(s.lazy(() => featureConfigSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
