import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `published`: the summary covers every article the story had when it was written. `stale`:
 * articles joined since; the rewrite is queued. `preparing`: no summary yet — the texts are the
 * lead article's own.
 */
export const SummaryState = {
  Published: "published",
  Stale: "stale",
  Preparing: "preparing",
} as const;
export type SummaryState = (typeof SummaryState)[keyof typeof SummaryState] | (string & {});

export const summaryStateSchema: EnumSchema<SummaryState> = s.enumOf<SummaryState>(SummaryState);
