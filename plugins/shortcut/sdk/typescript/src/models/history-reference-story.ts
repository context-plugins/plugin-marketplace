import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyType2Schema, type StoryType2 } from "./story-type2.js";
import { idSchema, type Id } from "./unions/id.js";

/** A reference to a Story. */
export type HistoryReferenceStory = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The application URL of the Story. */
  appUrl: string;
  /** The name of the entity referenced. */
  name: string;
  /** If the referenced entity is a Story, either "bug", "chore", or "feature". */
  storyType: StoryType2;
  /** The Story's Parent ID (only applicable if Story is a Sub-task) */
  parentStoryId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const historyReferenceStoryProperties: s.Shape<HistoryReferenceStory> = {
  id: idSchema,
  entityType: s.string(),
  appUrl: s.string(),
  name: s.string(),
  storyType: storyType2Schema,
  parentStoryId: s.optional(s.int()),
  _keysMap: {
    entityType: "entity_type",
    appUrl: "app_url",
    storyType: "story_type",
    parentStoryId: "parent_story_id",
  },
};

export const historyReferenceStoryInternalSchema: Schema<HistoryReferenceStory> =
  s.object<HistoryReferenceStory>(historyReferenceStoryProperties, { additionalProperties: s.json() });

export const historyReferenceStorySchema: Schema<HistoryReferenceStory> = s.lazySchema(() =>
  s.object<HistoryReferenceStory>(
    {
      ...historyReferenceStoryProperties,
      appUrl: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
