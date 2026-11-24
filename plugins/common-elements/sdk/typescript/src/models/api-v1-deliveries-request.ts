import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1DeliveriesRequest = {
  /**
   * Dataset key from /v1/deliveries/datasets. Current keys: associations, vendors, statutes,
   * building-safety, report-card, changes.
   */
  dataset: string;
  /** `csv` (default) or `jsonl`. */
  format?: string;
  /**
   * `snapshot` for the dataset as it stands, or `changes` for what moved inside the window your
   * plan allows.
   */
  mode?: string;
  /** Dataset-specific filters, in the same vocabulary as the matching read endpoint. */
  filters?: Record<string, unknown>;
  /**
   * Subset of the dataset's column dictionary. Narrowing only; it can never add a column the
   * dictionary does not already publish.
   */
  columns?: string[];
  /** Your own label for the run, echoed back on status and in the manifest. */
  label?: string;
};

export const apiV1DeliveriesRequestSchema: Schema<ApiV1DeliveriesRequest> = s.object<ApiV1DeliveriesRequest>({
  dataset: s.string(),
  format: s.optional(s.string()),
  mode: s.optional(s.string()),
  filters: s.optional(s.record(s.string(), s.unknown())),
  columns: s.optional(s.array(s.string())),
  label: s.optional(s.string()),
});
