import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBusinessCentralAutomationApiV20ExtensionDeploymentSchema,
  type StatusBusinessCentralAutomationApiV20ExtensionDeployment,
} from "./status-business-central-automation-api-v20-extension-deployment.js";

export type ExtensionDeploymentStatus = {
  id?: string;
  /** Extension name */
  name?: string;
  /** Extension publisher */
  publisher?: string;
  /** Type of deployment operation */
  operationType?: string;
  /** Deployment status */
  status?: StatusBusinessCentralAutomationApiV20ExtensionDeployment;
  /** Extension version */
  appVersion?: string;
  startedOn?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extensionDeploymentStatusSchema: Schema<ExtensionDeploymentStatus> =
  s.object<ExtensionDeploymentStatus>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      publisher: s.optional(s.string()),
      operationType: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusBusinessCentralAutomationApiV20ExtensionDeploymentSchema)),
      appVersion: s.optional(s.string()),
      startedOn: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
