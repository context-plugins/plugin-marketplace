import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Story links allow you create semantic relationships between two stories. Relationship types are
 * relates to, blocks / blocked by, and duplicates / is duplicated by. The format is `subject ->
 * link -> object`, or for example "story 5 blocks story 6".
 */
export type StoryLink = {
  /** A string description of this resource. */
  entityType: string;
  /** The unique identifier of the Story Link. */
  id: number;
  /** The ID of the subject Story. */
  subjectId: number;
  /** The workflow state of the "subject" story. */
  subjectWorkflowStateId: number;
  /**
   * How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates
   * to".
   */
  verb: string;
  /** The ID of the object Story. */
  objectId: number;
  /** The time/date when the Story Link was created. */
  createdAt: Date;
  /** The time/date when the Story Link was last updated. */
  updatedAt: Date;
};

export const storyLinkSchema: Schema<StoryLink> = s.object<StoryLink>({
  entityType: s.string(),
  id: s.int(),
  subjectId: s.int(),
  subjectWorkflowStateId: s.int(),
  verb: s.string(),
  objectId: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    subjectId: "subject_id",
    subjectWorkflowStateId: "subject_workflow_state_id",
    objectId: "object_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
