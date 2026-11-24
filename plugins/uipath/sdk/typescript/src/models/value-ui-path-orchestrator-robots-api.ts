import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueUiPathOrchestratorRobotsApi = {
  /** Unique robot identifier */
  id?: number;
  /** Robot display name */
  name?: string;
  /** Hostname of the machine the robot is registered on */
  machineName?: string;
  /** Robot licensing type */
  type?: string;
  /** Whether the robot is currently connected to Orchestrator */
  isConnected?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorRobotsApiSchema: Schema<ValueUiPathOrchestratorRobotsApi> =
  s.object<ValueUiPathOrchestratorRobotsApi>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      machineName: s.optional(s.string()),
      type: s.optional(s.string()),
      isConnected: s.optional(s.boolean()),
      _keysMap: {
        id: "Id",
        name: "Name",
        machineName: "MachineName",
        type: "Type",
        isConnected: "IsConnected",
      },
    },
    { additionalProperties: s.json() },
  );
