import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exportTypeSchema, type ExportType } from "./export-type.js";
import { groupExportFilterSchema, type GroupExportFilter } from "./group-export-filter.js";

export type GroupExportRequestBody = {
  /** Which export shape to produce. */
  exportType: ExportType;
  /**
   * Fully qualified bitlinks (e.g. "bit.ly/abc"). Used by export_type link_engagements_batch when
   * the caller already knows the exact links. Mutually exclusive with filter (provide one or the
   * other).
   */
  bitlinks?: string[];
  /**
   * Start of the metrics date range (Unix seconds, UTC). Clamped to the caller's tier data window.
   * For link_engagements_batch, required together with unix_to unless the tier max-history default
   * applies. For links_list or qr_codes_list, used when include_metrics is true.
   */
  unixFrom?: number;
  /** End of the metrics date range (Unix seconds, UTC). See unix_from. */
  unixTo?: number;
  /**
   * Search constraints used to resolve links or QR codes for export. Required for links_list and
   * qr_codes_list.
   */
  filter?: GroupExportFilter;
  /**
   * When true on links_list or qr_codes_list, append clicks, scans, and button_clicks columns and
   * apply the 200-row cap. Requires unix_from and unix_to (or tier-default window behavior where
   * applicable).
   */
  includeMetrics?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupExportRequestBodySchema: Schema<GroupExportRequestBody> = s.object<GroupExportRequestBody>(
  {
    exportType: exportTypeSchema,
    bitlinks: s.optional(s.array(s.string())),
    unixFrom: s.optional(s.int()),
    unixTo: s.optional(s.int()),
    filter: s.optional(s.lazy(() => groupExportFilterSchema)),
    includeMetrics: s.optional(s.boolean()),
    _keysMap: {
      exportType: "export_type",
      unixFrom: "unix_from",
      unixTo: "unix_to",
      includeMetrics: "include_metrics",
    },
  },
  { additionalProperties: s.json() },
);
