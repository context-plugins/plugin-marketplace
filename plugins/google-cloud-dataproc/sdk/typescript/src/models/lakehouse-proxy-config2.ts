import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Output only. The Lakehouse proxy routing configuration for the metastore service. */
export type LakehouseProxyConfig2 = {
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

export const lakehouseProxyConfig2Schema: Schema<LakehouseProxyConfig2> = s.object<LakehouseProxyConfig2>(
  {
    namespaces: s.optional(s.array(s.string())),
    catalog: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
