import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for migrating Hive metadata. */
export type HiveConfig = {
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

export const hiveConfigSchema: Schema<HiveConfig> = s.object<HiveConfig>(
  {
    catalog: s.optional(s.string()),
    databases: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
