import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { verb2Schema, type Verb2 } from "./verb2.js";

/** An action representing a Story Link being created. */
export type HistoryActionStoryLinkCreate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "create" */
  action?: "create";
  /** The verb describing the link's relationship. */
  verb: Verb2;
  /** The Story ID of the subject Story. */
  subjectId: number;
  /** The Story ID of the object Story. */
  objectId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionStoryLinkCreateSchema: Schema<HistoryActionStoryLinkCreate> =
  s.object<HistoryActionStoryLinkCreate>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("create"), "create"),
      verb: verb2Schema,
      subjectId: s.int(),
      objectId: s.int(),
      _keysMap: {
        entityType: "entity_type",
        subjectId: "subject_id",
        objectId: "object_id",
      },
    },
    { additionalProperties: s.json() },
  );
