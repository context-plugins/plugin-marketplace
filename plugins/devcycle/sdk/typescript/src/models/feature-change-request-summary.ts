import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  featureDetailsInternalSchema,
  featureDetailsSchema,
  type FeatureDetails,
} from "./feature-details.js";
import { operationSchema, type Operation } from "./operation.js";
import {
  statusDevCycleManagementFeatureChangeRequestsApiSchema,
  type StatusDevCycleManagementFeatureChangeRequestsApi,
} from "./status-dev-cycle-management-feature-change-requests-api.js";

export type FeatureChangeRequestSummary = {
  /** A unique Feature ID */
  id: string;
  /** The Project owning the Feature Change Request */
  project: string;
  /** The Feature with requested changes */
  feature: string;
  /** Status of the Feature */
  status: StatusDevCycleManagementFeatureChangeRequestsApi;
  /** Describes the type of requested change to a feature. example: 'featureUpdate' */
  operation: Operation;
  /** Change Request Description */
  description?: string;
  /** a0 users who are requested to review the change */
  reviewers: Record<string, unknown>;
  /** Current Reviewes for the change request */
  reviews: Record<string, unknown>[];
  /** ID of the User who created the Feature */
  createdBy: string;
  /** ID of the User who last updated the Feature */
  updatedBy?: string;
  /** The date the Feature was created */
  createdAt?: Date;
  /** The date the Feature was last updated */
  updatedAt?: Date;
  feature2: FeatureDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureChangeRequestSummaryProperties: s.Shape<FeatureChangeRequestSummary> = {
  id: s.string(),
  project: s.string(),
  feature: s.string(),
  status: statusDevCycleManagementFeatureChangeRequestsApiSchema,
  operation: operationSchema,
  description: s.optional(s.string()),
  reviewers: s.record(s.string(), s.unknown()),
  reviews: s.array(s.record(s.string(), s.unknown())),
  createdBy: s.string(),
  updatedBy: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  feature2: featureDetailsInternalSchema,
  _keysMap: {
    id: "_id",
    project: "_project",
    feature: "_feature",
    createdBy: "_createdBy",
    updatedBy: "_updatedBy",
    feature2: "feature",
  },
};

export const featureChangeRequestSummaryInternalSchema: Schema<FeatureChangeRequestSummary> =
  s.object<FeatureChangeRequestSummary>(featureChangeRequestSummaryProperties, {
    additionalProperties: s.json(),
  });

export const featureChangeRequestSummarySchema: Schema<FeatureChangeRequestSummary> = s.lazySchema(() =>
  s.object<FeatureChangeRequestSummary>(
    {
      ...featureChangeRequestSummaryProperties,
      feature2: featureDetailsSchema,
    },
    { additionalProperties: s.json() },
  ),
);
