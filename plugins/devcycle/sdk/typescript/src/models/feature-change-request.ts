import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";
import {
  statusDevCycleManagementFeatureChangeRequestsApiSchema,
  type StatusDevCycleManagementFeatureChangeRequestsApi,
} from "./status-dev-cycle-management-feature-change-requests-api.js";

export type FeatureChangeRequest = {
  /** A unique Feature ID */
  id: string;
  /** The Project owning the Feature Change Request */
  project: string;
  /** Change Transaction model mongo _id. */
  baseFeatureSnapshot: string;
  /** The Feature with requested changes */
  feature: string;
  /** Status of the Feature */
  status: StatusDevCycleManagementFeatureChangeRequestsApi;
  changes?: Record<string, unknown>[];
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureChangeRequestSchema: Schema<FeatureChangeRequest> = s.object<FeatureChangeRequest>(
  {
    id: s.string(),
    project: s.string(),
    baseFeatureSnapshot: s.string(),
    feature: s.string(),
    status: statusDevCycleManagementFeatureChangeRequestsApiSchema,
    changes: s.optional(s.array(s.record(s.string(), s.unknown()))),
    operation: operationSchema,
    description: s.optional(s.string()),
    reviewers: s.record(s.string(), s.unknown()),
    reviews: s.array(s.record(s.string(), s.unknown())),
    createdBy: s.string(),
    updatedBy: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      id: "_id",
      project: "_project",
      baseFeatureSnapshot: "_baseFeatureSnapshot",
      feature: "_feature",
      createdBy: "_createdBy",
      updatedBy: "_updatedBy",
    },
  },
  { additionalProperties: s.json() },
);
