import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Deployment status */
export const StatusBusinessCentralAutomationApiV20ExtensionDeployment = {
  Unknown: "Unknown",
  InProgress: "InProgress",
  Completed: "Completed",
  Failed: "Failed",
} as const;
export type StatusBusinessCentralAutomationApiV20ExtensionDeployment =
  | (typeof StatusBusinessCentralAutomationApiV20ExtensionDeployment)[keyof typeof StatusBusinessCentralAutomationApiV20ExtensionDeployment]
  | (string & {});

export const statusBusinessCentralAutomationApiV20ExtensionDeploymentSchema: EnumSchema<StatusBusinessCentralAutomationApiV20ExtensionDeployment> =
  s.enumOf<StatusBusinessCentralAutomationApiV20ExtensionDeployment>(
    StatusBusinessCentralAutomationApiV20ExtensionDeployment,
  );
