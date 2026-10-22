import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dateFieldSchema, type DateField } from "./date-field.js";
import {
  semanticSearchTimelinePeriodSchema,
  type SemanticSearchTimelinePeriod,
} from "./semantic-search-timeline-period.js";

/**
 * Present only on a search run as a timeline: one with `timeline` set, or one over a span of more
 * than 31 days with it left out. `searchResults` then come period by period, oldest first, and by
 * record date within a period; each hit's `timelinePeriod` is its period's index in `periods`.
 */
export type SemanticSearchTimeline = {
  dateField: DateField;
  /**
   * `true` when the caller left `timeline` out and the span was long enough to run as a timeline;
   * `false` when the caller asked for it.
   */
  automatic?: boolean;
  /** First day of the span searched. */
  start: string;
  /** Last day of the span searched, inclusive. */
  end: string;
  periods: SemanticSearchTimelinePeriod[];
  /** Plain-language notes on the span, such as the start chosen when none was given. */
  notes: string[];
};

export const semanticSearchTimelineSchema: Schema<SemanticSearchTimeline> = s.object<SemanticSearchTimeline>({
  dateField: dateFieldSchema,
  automatic: s.optional(s.boolean()),
  start: s.dateOnly(),
  end: s.dateOnly(),
  periods: s.array(s.lazy(() => semanticSearchTimelinePeriodSchema)),
  notes: s.array(s.string()),
});
