import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a Task being created. */
export type HistoryActionTaskCreate = {
  /** The description of the Task. */
  description: string;
  /** The type of entity referenced. */
  entityType: string;
  /** An array of Member IDs that represent who has been mentioned in the Task. */
  mentionIds?: string[];
  /** An array of Groups IDs that represent which have been mentioned in the Task. */
  groupMentionIds?: string[];
  /** An array of Member IDs that represent the Task's owners. */
  ownerIds?: string[];
  /** The ID of the entity referenced. */
  id: number;
  /** The action of the entity referenced. @default "create" */
  action?: "create";
  /** Whether or not the Task is complete. */
  complete: boolean;
  /** A timestamp that represent's the Task's deadline. */
  deadline?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionTaskCreateSchema: Schema<HistoryActionTaskCreate> =
  s.object<HistoryActionTaskCreate>(
    {
      description: s.string(),
      entityType: s.string(),
      mentionIds: s.optional(s.array(s.string())),
      groupMentionIds: s.optional(s.array(s.string())),
      ownerIds: s.optional(s.array(s.string())),
      id: s.int(),
      action: s.defaulted(s.literal("create"), "create"),
      complete: s.boolean(),
      deadline: s.optional(s.string()),
      _keysMap: {
        entityType: "entity_type",
        mentionIds: "mention_ids",
        groupMentionIds: "group_mention_ids",
        ownerIds: "owner_ids",
      },
    },
    { additionalProperties: s.json() },
  );
