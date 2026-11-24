import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  bigLakeMetastoreMigrationConfig2Schema,
  type BigLakeMetastoreMigrationConfig2,
} from "./big-lake-metastore-migration-config2.js";
import { phaseSchema, type Phase } from "./phase.js";
import { state14Schema, type State14 } from "./state14.js";

/** The details of a migration execution resource. */
export type MigrationExecution = {
  /**
   * Output only. The relative resource name of the migration execution, in the following form:
   * projects/{project_number}/locations/{location_id}/services/{service_id}/migrationExecutions/{migration_execution_id}
   */
  name?: string;
  /** Output only. The current state of the migration execution. */
  state?: State14;
  /**
   * Configuration information specific to migrating from Dataproc Metastore to BigLake Metastore.
   */
  biglakeMetastoreMigrationConfig?: BigLakeMetastoreMigrationConfig2;
  /** Output only. Additional information about the current state of the migration execution. */
  stateMessage?: string;
  /**
   * Output only. Deprecated: Phase was designed for incoming migrations to Dataproc Metastore, not
   * applicable when migrating away from it. The current phase of the migration execution.
   *
   * @deprecated
   */
  phase?: Phase;
  /** Output only. The time when the migration execution was started. */
  createTime?: string;
  /** Output only. The time when the migration execution finished. */
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const migrationExecutionSchema: Schema<MigrationExecution> = s.object<MigrationExecution>(
  {
    name: s.optional(s.string()),
    state: s.optional(s.lazy(() => state14Schema)),
    biglakeMetastoreMigrationConfig: s.optional(s.lazy(() => bigLakeMetastoreMigrationConfig2Schema)),
    stateMessage: s.optional(s.string()),
    phase: s.optional(s.lazy(() => phaseSchema)),
    createTime: s.optional(s.string()),
    endTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
