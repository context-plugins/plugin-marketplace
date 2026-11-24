import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Emoji reaction on a comment. */
export type StoryReaction = {
  /** Emoji text of the reaction. */
  emoji: string;
  /** Permissions who have reacted with this. */
  permissionIds: string[];
};

export const storyReactionSchema: Schema<StoryReaction> = s.object<StoryReaction>({
  emoji: s.string(),
  permissionIds: s.array(s.string()),
  _keysMap: {
    permissionIds: "permission_ids",
  },
});
