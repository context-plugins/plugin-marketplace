import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  composerRecipeInternalSchema,
  composerRecipeSchema,
  type ComposerRecipe,
} from "./composer-recipe.js";

/** One page of Composer recipes. */
export type ComposerRecipeList = {
  /** Recipes on this page. */
  items: ComposerRecipe[];
  /** Token for the next page. Absent on the last page. */
  pageToken?: string;
  /** Total number of recipes across all pages. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const composerRecipeListProperties: s.Shape<ComposerRecipeList> = {
  items: s.array(s.lazy(() => composerRecipeInternalSchema)),
  pageToken: s.optional(s.string()),
  rowCount: s.int(),
};

export const composerRecipeListInternalSchema: Schema<ComposerRecipeList> = s.object<ComposerRecipeList>(
  composerRecipeListProperties,
  { additionalProperties: s.json() },
);

export const composerRecipeListSchema: Schema<ComposerRecipeList> = s.lazySchema(() =>
  s.object<ComposerRecipeList>(
    {
      ...composerRecipeListProperties,
      items: s.array(s.lazy(() => composerRecipeSchema)),
      rowCount: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
