import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Generic "filter X is available, current value is Y" block used for `shared`, `tags`,
 * `minMessages`, `search`, and `messageType`. Either `type` (free-form value) or `values` (enum of
 * allowed strings) is present, not both. `current` is the caller-supplied value passed through from
 * `req.query`, hence string-or-null even when `type` is `'number'`.
 */
export type SemanticSearchHistoryFilterToggle = {
  type?: string;
  values?: string[];
  description: string;
  current: string | null;
  applied: boolean;
};

export const semanticSearchHistoryFilterToggleSchema: Schema<SemanticSearchHistoryFilterToggle> =
  s.object<SemanticSearchHistoryFilterToggle>({
    type: s.optional(s.string()),
    values: s.optional(s.array(s.string())),
    description: s.string(),
    current: s.nullable(s.string()),
    applied: s.boolean(),
  });
