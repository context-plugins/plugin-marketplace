import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { idSchema, type Id } from "./unions/id.js";

/** A reference to a Story Task. */
export type HistoryReferenceStoryTask = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** The description of the Story Task. */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyReferenceStoryTaskSchema: Schema<HistoryReferenceStoryTask> =
  s.object<HistoryReferenceStoryTask>(
    {
      id: idSchema,
      entityType: s.string(),
      description: s.string(),
      _keysMap: {
        entityType: "entity_type",
      },
    },
    { additionalProperties: s.json() },
  );
