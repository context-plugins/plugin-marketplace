import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Summary = {
  /** Total archived conversations matching the filter */
  totalArchived?: number;
  /** Archive timestamp of the first item in the current page */
  oldestArchive?: Date;
  /** Archive timestamp of the last item in the current page */
  newestArchive?: Date;
};

export const summarySchema: Schema<Summary> = s.object<Summary>({
  totalArchived: s.optional(s.int()),
  oldestArchive: s.optional(s.dateTime()),
  newestArchive: s.optional(s.dateTime()),
});
