import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backfillStatus2Schema, type BackfillStatus2 } from "./backfill-status2.js";
import { conflictPolicySchema, type ConflictPolicy } from "./conflict-policy.js";
import { hiveConfig1Schema, type HiveConfig1 } from "./hive-config1.js";
import { icebergConfig1Schema, type IcebergConfig1 } from "./iceberg-config1.js";
import { modeSchema, type Mode } from "./mode.js";

/**
 * Defines the configuration required to migrate metadata from a Dataproc Metastore service to
 * BigLake Metastore.
 */
export type BigLakeMetastoreMigrationConfig = {
  /**
   * Optional. If true, performs discovery of requested resources and analysis against the target
   * catalog to come up with a plan for each resource (e.g. Create, Update, Skip, etc.). No metadata
   * is actually migrated.
   */
  dryRun?: boolean;
  /** Output only. */
  backfillStatus?: BackfillStatus2;
  /**
   * Optional. The policy to handle conflicts when migrating resources, defaults to SKIP if not
   * specified.
   */
  conflictPolicy?: ConflictPolicy;
  /** Required. Defines the behavior of the migration execution. */
  mode?: Mode;
  /** Optional. Configuration for migrating Iceberg tables to a BigLake Iceberg REST catalog. */
  icebergConfig?: IcebergConfig1;
  /**
   * Optional. The Cloud Storage path where the backfill / dry run report should be written. If not
   * provided, the report will be generated in the service's artifacts bucket. Format:
   * "gs://path/to/folder"
   */
  reportPath?: string;
  /**
   * Optional. At least one of hive_config or iceberg_config must be provided, otherwise, a
   * validation error will be thrown. If only one is provided, the service only migrates tables of
   * that specific type. If both are provided, both Hive and Iceberg tables will be
   * migrated.Configuration for migrating Hive tables to a BigLake Hive catalog.
   */
  hiveConfig?: HiveConfig1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bigLakeMetastoreMigrationConfigSchema: Schema<BigLakeMetastoreMigrationConfig> =
  s.object<BigLakeMetastoreMigrationConfig>(
    {
      dryRun: s.optional(s.boolean()),
      backfillStatus: s.optional(s.lazy(() => backfillStatus2Schema)),
      conflictPolicy: s.optional(s.lazy(() => conflictPolicySchema)),
      mode: s.optional(s.lazy(() => modeSchema)),
      icebergConfig: s.optional(s.lazy(() => icebergConfig1Schema)),
      reportPath: s.optional(s.string()),
      hiveConfig: s.optional(s.lazy(() => hiveConfig1Schema)),
    },
    { additionalProperties: s.json() },
  );
