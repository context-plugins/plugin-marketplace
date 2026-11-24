import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { composerRecipeResultSchema, type ComposerRecipeResult } from "./composer-recipe-result.js";

/** One page of a Composer recipe's results. */
export type ComposerRecipeResultList = {
  /** Results on this page. */
  items: ComposerRecipeResult[];
  /** Token for the next page. Absent on the last page. */
  pageToken?: string;
  /** Total number of results across all pages. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const composerRecipeResultListProperties: s.Shape<ComposerRecipeResultList> = {
  items: s.array(s.lazy(() => composerRecipeResultSchema)),
  pageToken: s.optional(s.string()),
  rowCount: s.int(),
};

export const composerRecipeResultListInternalSchema: Schema<ComposerRecipeResultList> =
  s.object<ComposerRecipeResultList>(composerRecipeResultListProperties, { additionalProperties: s.json() });

export const composerRecipeResultListSchema: Schema<ComposerRecipeResultList> = s.lazySchema(() =>
  s.object<ComposerRecipeResultList>(
    {
      ...composerRecipeResultListProperties,
      rowCount: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
