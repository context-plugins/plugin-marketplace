import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SetConfInputSystemMetrics = {
  /** Set Name */
  name: string;
  /** Filter Expression */
  filter: string;
  /** Include Child Processes */
  includeChildren?: boolean;
};

export const setConfInputSystemMetricsSchema: Schema<SetConfInputSystemMetrics> =
  s.object<SetConfInputSystemMetrics>({
    name: s.string(),
    filter: s.string(),
    includeChildren: s.optional(s.boolean()),
  });
