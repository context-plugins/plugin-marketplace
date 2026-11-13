import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { verb2Schema, type Verb2 } from "./verb2.js";

/** An action representing a Story Link being deleted. */
export type HistoryActionStoryLinkDelete = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "delete" */
  action?: "delete";
  /** The verb describing the link's relationship. */
  verb: Verb2;
  /** The Story ID of the subject Story. */
  subjectId: number | null;
  /** The Story ID of the object Story. */
  objectId: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionStoryLinkDeleteSchema: Schema<HistoryActionStoryLinkDelete> =
  s.object<HistoryActionStoryLinkDelete>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("delete"), "delete"),
      verb: verb2Schema,
      subjectId: s.nullable(s.int()),
      objectId: s.nullable(s.int()),
      _keysMap: {
        entityType: "entity_type",
        subjectId: "subject_id",
        objectId: "object_id",
      },
    },
    { additionalProperties: s.json() },
  );
