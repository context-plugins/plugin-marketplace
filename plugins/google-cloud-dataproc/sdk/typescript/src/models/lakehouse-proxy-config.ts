import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Configuration for Dataproc Metastore to Lakehouse proxy routing.In a phased migration, namespaces
 * are migrated from Dataproc Metastore to a Lakehouse Iceberg REST Catalog in batches. Between and
 * after migration phases, the metastore service operates in PROXY state where requests for migrated
 * namespaces are forwarded to the Lakehouse catalog while unmigrated namespaces continue to be
 * served locally by DPMS.
 */
export type LakehouseProxyConfig = {
  /**
   * Output only. The list of namespaces currently proxied to the Lakehouse catalog. As each
   * migration batch completes, newly migrated namespaces are added to this list.
   */
  namespaces?: string[];
  /**
   * Output only. The Lakehouse Iceberg REST Catalog where requests are being proxied to. Format:
   * projects/{project_id_or_number}/catalogs/{catalog_id}.
   */
  catalog?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lakehouseProxyConfigSchema: Schema<LakehouseProxyConfig> = s.object<LakehouseProxyConfig>(
  {
    namespaces: s.optional(s.array(s.string())),
    catalog: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
