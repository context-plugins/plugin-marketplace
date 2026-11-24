import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalIdHudPlatformTasksetsApiSchema,
  type ExternalIdHudPlatformTasksetsApi,
} from "./unions/external-id-hud-platform-tasksets-api.js";
import {
  scenarioHudPlatformTracesApiSchema,
  type ScenarioHudPlatformTracesApi,
} from "./unions/scenario-hud-platform-traces-api.js";
import { tasksetIdSchema, type TasksetId } from "./unions/taskset-id.js";
import { tasksetNameSchema, type TasksetName } from "./unions/taskset-name.js";
import { versionNumberSchema, type VersionNumber } from "./unions/version-number.js";

export type TraceTaskRef = {
  id: string;
  versionId: string;
  versionNumber?: VersionNumber;
  externalId?: ExternalIdHudPlatformTasksetsApi;
  tasksetId?: TasksetId;
  tasksetName?: TasksetName;
  scenario?: ScenarioHudPlatformTracesApi;
  scenarioArgs?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceTaskRefSchema: Schema<TraceTaskRef> = s.object<TraceTaskRef>(
  {
    id: s.string(),
    versionId: s.string(),
    versionNumber: s.optional(s.lazy(() => versionNumberSchema)),
    externalId: s.optional(s.lazy(() => externalIdHudPlatformTasksetsApiSchema)),
    tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
    tasksetName: s.optional(s.lazy(() => tasksetNameSchema)),
    scenario: s.optional(s.lazy(() => scenarioHudPlatformTracesApiSchema)),
    scenarioArgs: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      versionId: "version_id",
      versionNumber: "version_number",
      externalId: "external_id",
      tasksetId: "taskset_id",
      tasksetName: "taskset_name",
      scenarioArgs: "scenario_args",
    },
  },
  { additionalProperties: s.json() },
);
