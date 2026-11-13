import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyChangesStoryLinkSchema, type HistoryChangesStoryLink } from "./history-changes-story-link.js";
import { verb2Schema, type Verb2 } from "./verb2.js";

/** An action representing a Story Link being updated. */
export type HistoryActionStoryLinkUpdate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "update" */
  action?: "update";
  /** The verb describing the link's relationship. */
  verb: Verb2;
  /** The Story ID of the subject Story. */
  subjectId: number;
  /** The Story ID of the object Story. */
  objectId: number;
  /** The changes that have occurred as a result of the action. */
  changes: HistoryChangesStoryLink;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionStoryLinkUpdateSchema: Schema<HistoryActionStoryLinkUpdate> =
  s.object<HistoryActionStoryLinkUpdate>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("update"), "update"),
      verb: verb2Schema,
      subjectId: s.int(),
      objectId: s.int(),
      changes: historyChangesStoryLinkSchema,
      _keysMap: {
        entityType: "entity_type",
        subjectId: "subject_id",
        objectId: "object_id",
      },
    },
    { additionalProperties: s.json() },
  );
