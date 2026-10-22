import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SemanticSearchTimelinePeriod = {
  label: string;
  /**
   * First day of the period. `null` for the last bucket, of matches whose record has no source
   * date.
   */
  start: string | null;
  end: string | null;
  /** Records with matches in this period. `0` may only mean nothing matched this query then. */
  records: number;
  matches: number;
  /** This period's own search failed; any matches shown come from the search of the whole span. */
  searchFailed?: boolean;
  /**
   * The search reached only part of the index for this period, so a record missing here may still
   * exist.
   */
  searchIncomplete?: string;
};

export const semanticSearchTimelinePeriodSchema: Schema<SemanticSearchTimelinePeriod> =
  s.object<SemanticSearchTimelinePeriod>({
    label: s.string(),
    start: s.nullable(s.dateOnly()),
    end: s.nullable(s.dateOnly()),
    records: s.int(),
    matches: s.int(),
    searchFailed: s.optional(s.boolean()),
    searchIncomplete: s.optional(s.string()),
  });
