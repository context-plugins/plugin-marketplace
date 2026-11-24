import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1DeliveriesSchedulesRequest1 = {
  /** `daily`, `weekly`, or `monthly`. */
  cadence?: string;
  /** Replacement filters, re-validated against the dataset. */
  filters?: Record<string, unknown>;
  /** Replacement column subset, re-validated against the dictionary. */
  columns?: string[];
  /**
   * Pause or resume. Resuming recomputes the next run from now, so a schedule paused for a month
   * does not wake and fire a backlog.
   */
  paused?: boolean;
};

export const apiV1DeliveriesSchedulesRequest1Schema: Schema<ApiV1DeliveriesSchedulesRequest1> =
  s.object<ApiV1DeliveriesSchedulesRequest1>({
    cadence: s.optional(s.string()),
    filters: s.optional(s.record(s.string(), s.unknown())),
    columns: s.optional(s.array(s.string())),
    paused: s.optional(s.boolean()),
  });
