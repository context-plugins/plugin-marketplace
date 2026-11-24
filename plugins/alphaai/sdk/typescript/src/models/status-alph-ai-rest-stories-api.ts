import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `found`: `story` is filled. `merged`: this story was folded into another one, `redirect_to` is
 * its id. `not_a_story`: the id belongs to an article only one publisher carried, `article` names
 * it. (An unknown id is a 404, not a status.)
 */
export const StatusAlphAiRestStoriesApi = {
  Found: "found",
  Merged: "merged",
  NotAStory: "not_a_story",
} as const;
export type StatusAlphAiRestStoriesApi =
  | (typeof StatusAlphAiRestStoriesApi)[keyof typeof StatusAlphAiRestStoriesApi]
  | (string & {});

export const statusAlphAiRestStoriesApiSchema: EnumSchema<StatusAlphAiRestStoriesApi> =
  s.enumOf<StatusAlphAiRestStoriesApi>(StatusAlphAiRestStoriesApi);
