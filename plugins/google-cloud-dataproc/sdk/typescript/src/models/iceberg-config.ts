import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for migrating Iceberg metadata. */
export type IcebergConfig = {
  /**
   * Required. The target catalog for migrated Iceberg metadata. Format:
   * "projects/{project_id_or_number}/catalogs/{catalog_id}"
   */
  catalog?: string;
  /**
   * Required. The list of namespaces to migrate to the Iceberg REST catalog. Use "*" to migrate all
   * namespaces. Note: If Hive tables exist in these namespaces, they will only be migrated if
   * hive_config is also specified.
   */
  namespaces?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const icebergConfigSchema: Schema<IcebergConfig> = s.object<IcebergConfig>(
  {
    catalog: s.optional(s.string()),
    namespaces: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
