import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAlphAiRestStoriesApiSchema,
  type StatusAlphAiRestStoriesApi,
} from "./status-alph-ai-rest-stories-api.js";
import { storyArticleRefSchema, type StoryArticleRef } from "./story-article-ref.js";
import { storyInternalSchema, storySchema, type Story } from "./story.js";

/**
 * What a story id resolves to. Exactly one of `story`, `redirect_to` and `article` is filled,
 * according to `status`.
 */
export type StoryLookup = {
  /**
   * `found`: `story` is filled. `merged`: this story was folded into another one, `redirect_to` is
   * its id. `not_a_story`: the id belongs to an article only one publisher carried, `article` names
   * it. (An unknown id is a 404, not a status.)
   */
  status: StatusAlphAiRestStoriesApi;
  story?: Story | null;
  /** The surviving story's id, when `status` is `merged`. */
  redirectTo?: string | null;
  /** The single-publisher article the id belongs to, when `status` is `not_a_story`. */
  article?: StoryArticleRef | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storyLookupProperties: s.Shape<StoryLookup> = {
  status: statusAlphAiRestStoriesApiSchema,
  story: s.optionalNullable(s.lazy(() => storyInternalSchema)),
  redirectTo: s.optionalNullable(s.string()),
  article: s.optionalNullable(s.lazy(() => storyArticleRefSchema)),
  _keysMap: {
    redirectTo: "redirect_to",
  },
};

export const storyLookupInternalSchema: Schema<StoryLookup> = s.object<StoryLookup>(storyLookupProperties, {
  additionalProperties: s.json(),
});

export const storyLookupSchema: Schema<StoryLookup> = s.lazySchema(() =>
  s.object<StoryLookup>(
    {
      ...storyLookupProperties,
      story: s.optionalNullable(s.lazy(() => storySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
