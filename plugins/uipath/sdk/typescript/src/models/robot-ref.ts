import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeUiPathOrchestratorJobsApiSchema,
  type TypeUiPathOrchestratorJobsApi,
} from "./type-ui-path-orchestrator-jobs-api.js";

/** A lightweight reference to a robot associated with a job */
export type RobotRef = {
  /** Unique integer identifier of the robot */
  id?: number;
  /** Display name of the robot */
  name?: string;
  /** Hostname of the machine the robot runs on */
  machineName?: string;
  /** Unique integer identifier of the machine */
  machineId?: number;
  /** Version of the UiPath Robot software */
  version?: string;
  /** Licensing type of the robot */
  type?: TypeUiPathOrchestratorJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const robotRefSchema: Schema<RobotRef> = s.object<RobotRef>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    machineName: s.optional(s.string()),
    machineId: s.optional(s.int()),
    version: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeUiPathOrchestratorJobsApiSchema)),
    _keysMap: {
      id: "Id",
      name: "Name",
      machineName: "MachineName",
      machineId: "MachineId",
      version: "Version",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
