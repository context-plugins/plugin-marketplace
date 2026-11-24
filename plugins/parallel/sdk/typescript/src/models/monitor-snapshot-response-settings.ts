import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outputSchemaModelSchema, type OutputSchemaModel } from "./unions/output-schema-model.js";

/** Configuration settings for a `snapshot` monitor. */
export type MonitorSnapshotResponseSettings = {
  /** ID of the task run used as the monitoring baseline. */
  taskRunId: string;
  /** The original task input from the baseline task run that this monitor tracks. */
  query: string;
  /**
   * JSON schema derived from the baseline task run that constrains and structures the event output.
   */
  outputSchema?: OutputSchemaModel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorSnapshotResponseSettingsSchema: Schema<MonitorSnapshotResponseSettings> =
  s.object<MonitorSnapshotResponseSettings>(
    {
      taskRunId: s.string(),
      query: s.string(),
      outputSchema: s.optional(s.lazy(() => outputSchemaModelSchema)),
      _keysMap: {
        taskRunId: "task_run_id",
        outputSchema: "output_schema",
      },
    },
    { additionalProperties: s.json() },
  );
