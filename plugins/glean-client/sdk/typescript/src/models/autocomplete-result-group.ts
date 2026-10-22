import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A subsection of the results list from which distinct sections should be created. */
export type AutocompleteResultGroup = {
  /** The inclusive start index of the range. */
  startIndex?: number;
  /** The exclusive end index of the range. */
  endIndex?: number;
  /** The title of the result group to be displayed. Empty means no title. */
  title?: string;
};

export const autocompleteResultGroupSchema: Schema<AutocompleteResultGroup> =
  s.object<AutocompleteResultGroup>({
    startIndex: s.optional(s.int()),
    endIndex: s.optional(s.int()),
    title: s.optional(s.string()),
  });
