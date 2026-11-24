import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. At least one of hive_config or iceberg_config must be provided, otherwise, a validation
 * error will be thrown. If only one is provided, the service only migrates tables of that specific
 * type. If both are provided, both Hive and Iceberg tables will be migrated.Configuration for
 * migrating Hive tables to a BigLake Hive catalog.
 */
export type HiveConfig1 = {
  /**
   * Required. The target catalog for migrated databases and tables. Format:
   * "projects/{project_id_or_number}/catalogs/{catalog_id}"
   */
  catalog?: string;
  /**
   * Required. The list of databases to migrate to the Hive catalog. Use "*" to migrate all
   * databases. Note: If Iceberg tables exist in these databases, they will only be migrated if
   * iceberg_config is also specified.
   */
  databases?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hiveConfig1Schema: Schema<HiveConfig1> = s.object<HiveConfig1>(
  {
    catalog: s.optional(s.string()),
    databases: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
