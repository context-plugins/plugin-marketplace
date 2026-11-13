import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyChangesStorySchema, type HistoryChangesStory } from "./history-changes-story.js";
import { storyType3Schema, type StoryType3 } from "./story-type3.js";

/** An action representing a Story being updated. */
export type HistoryActionStoryUpdate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "update" */
  action?: "update";
  /** The application URL of the Story. */
  appUrl: string;
  /** The changes that have occurred as a result of the action. */
  changes?: HistoryChangesStory;
  /** The name of the Story. */
  name: string;
  /** The type of Story; either feature, bug, or chore. */
  storyType: StoryType3;
  /** The Story's Parent ID (only applicable if Story is a Sub-task) */
  parentStoryId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyActionStoryUpdateProperties: s.Shape<HistoryActionStoryUpdate> = {
  id: s.int(),
  entityType: s.string(),
  action: s.defaulted(s.literal("update"), "update"),
  appUrl: s.string(),
  changes: s.optional(s.lazy(() => historyChangesStorySchema)),
  name: s.string(),
  storyType: storyType3Schema,
  parentStoryId: s.optional(s.int()),
  _keysMap: {
    entityType: "entity_type",
    appUrl: "app_url",
    storyType: "story_type",
    parentStoryId: "parent_story_id",
  },
};

export const historyActionStoryUpdateInternalSchema: Schema<HistoryActionStoryUpdate> =
  s.object<HistoryActionStoryUpdate>(historyActionStoryUpdateProperties, { additionalProperties: s.json() });

export const historyActionStoryUpdateSchema: Schema<HistoryActionStoryUpdate> = s.lazySchema(() =>
  s.object<HistoryActionStoryUpdate>(
    {
      ...historyActionStoryUpdateProperties,
      appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
