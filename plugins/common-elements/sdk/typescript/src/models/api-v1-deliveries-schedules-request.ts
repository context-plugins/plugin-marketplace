import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1DeliveriesSchedulesRequest = {
  /**
   * Dataset key. Fixed at creation, because it is what entitlement was checked against. Current
   * keys: associations, vendors, statutes, building-safety, report-card, changes.
   */
  dataset: string;
  /** `daily`, `weekly`, or `monthly`. */
  cadence: string;
  /** `csv` (default) or `jsonl`. Fixed at creation. */
  format?: string;
  /** `snapshot` or `changes`. Fixed at creation. */
  mode?: string;
  /** Dataset-specific filters. Editable later with PATCH. */
  filters?: Record<string, unknown>;
  /** Subset of the dataset's column dictionary. Editable later. */
  columns?: string[];
  /**
   * Where to deliver. An unimplemented target type is refused with 501 `not_implemented` rather
   * than accepted and silently dropped.
   */
  target?: Record<string, unknown>;
};

export const apiV1DeliveriesSchedulesRequestSchema: Schema<ApiV1DeliveriesSchedulesRequest> =
  s.object<ApiV1DeliveriesSchedulesRequest>({
    dataset: s.string(),
    cadence: s.string(),
    format: s.optional(s.string()),
    mode: s.optional(s.string()),
    filters: s.optional(s.record(s.string(), s.unknown())),
    columns: s.optional(s.array(s.string())),
    target: s.optional(s.record(s.string(), s.unknown())),
  });
