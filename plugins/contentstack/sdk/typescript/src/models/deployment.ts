import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusContentstackLaunchDeploymentsApiSchema,
  type StatusContentstackLaunchDeploymentsApi,
} from "./status-contentstack-launch-deployments-api.js";

/** A deployment operation to a Launch environment. */
export type Deployment = {
  /** Unique identifier of the deployment. */
  uid?: string;
  /** Current status of the deployment. */
  status?: StatusContentstackLaunchDeploymentsApi;
  /** ISO 8601 timestamp when the deployment was created. */
  createdAt?: Date;
  /** ISO 8601 timestamp when the deployment completed. */
  completedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deploymentSchema: Schema<Deployment> = s.object<Deployment>(
  {
    uid: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusContentstackLaunchDeploymentsApiSchema)),
    createdAt: s.optional(s.dateTime()),
    completedAt: s.optional(s.dateTime()),
    _keysMap: {
      createdAt: "created_at",
      completedAt: "completed_at",
    },
  },
  { additionalProperties: s.json() },
);
