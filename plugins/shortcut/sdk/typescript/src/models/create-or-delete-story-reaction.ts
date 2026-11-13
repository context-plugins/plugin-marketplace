import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateOrDeleteStoryReaction = {
  /** The emoji short-code to add / remove. E.g. `:thumbsup::skin-tone-4:`. */
  emoji: string;
};

export const createOrDeleteStoryReactionSchema: Schema<CreateOrDeleteStoryReaction> =
  s.object<CreateOrDeleteStoryReaction>({
    emoji: s.string(),
  });
