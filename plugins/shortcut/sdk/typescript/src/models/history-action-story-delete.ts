import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyType3Schema, type StoryType3 } from "./story-type3.js";

/** An action representing a Story being deleted. */
export type HistoryActionStoryDelete = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "delete" */
  action?: "delete";
  /** The name of the Story. */
  name: string;
  /** The type of Story; either feature, bug, or chore. */
  storyType: StoryType3;
  /** The Story's Parent ID (only applicable if Story is a Sub-task) */
  parentStoryId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionStoryDeleteSchema: Schema<HistoryActionStoryDelete> =
  s.object<HistoryActionStoryDelete>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("delete"), "delete"),
      name: s.string(),
      storyType: storyType3Schema,
      parentStoryId: s.optional(s.int()),
      _keysMap: {
        entityType: "entity_type",
        storyType: "story_type",
        parentStoryId: "parent_story_id",
      },
    },
    { additionalProperties: s.json() },
  );
