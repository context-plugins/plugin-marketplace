import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The type of Story Link. The string can be subject or object. */
export type TypedStoryLink = {
  /** A string description of this resource. */
  entityType: string;
  /** The ID of the object Story. */
  objectId: number;
  /**
   * How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates
   * to".
   */
  verb: string;
  /** This indicates whether the Story is the subject or object in the Story Link. */
  type: string;
  /** The time/date when the Story Link was last updated. */
  updatedAt: Date;
  /** The unique identifier of the Story Link. */
  id: number;
  /** The ID of the subject Story. */
  subjectId: number;
  /** The workflow state of the "subject" story. */
  subjectWorkflowStateId: number;
  /** The time/date when the Story Link was created. */
  createdAt: Date;
};

export const typedStoryLinkSchema: Schema<TypedStoryLink> = s.object<TypedStoryLink>({
  entityType: s.string(),
  objectId: s.int(),
  verb: s.string(),
  type: s.string(),
  updatedAt: s.dateTime(),
  id: s.int(),
  subjectId: s.int(),
  subjectWorkflowStateId: s.int(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    objectId: "object_id",
    updatedAt: "updated_at",
    subjectId: "subject_id",
    subjectWorkflowStateId: "subject_workflow_state_id",
    createdAt: "created_at",
  },
});
