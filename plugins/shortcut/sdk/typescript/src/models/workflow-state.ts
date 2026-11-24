import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types:
 * Unstarted, Started, or Done.
 */
export type WorkflowState = {
  /** The description of what sort of Stories belong in that Workflow state. */
  description: string;
  /** A string description of this resource. */
  entityType: string;
  /** The hex color for this Workflow State. */
  color?: string;
  /** The verb that triggers a move to that Workflow State when making VCS commits. */
  verb: string | null;
  /** The Workflow State's name. */
  name: string;
  globalId: string;
  /** The number of Stories currently in that Workflow State. */
  numStories: number;
  /** The type of Workflow State (Unstarted, Started, or Finished) */
  type: string;
  /** When the Workflow State was last updated. */
  updatedAt: Date;
  /** The unique ID of the Workflow State. */
  id: number;
  /** The number of Story Templates associated with that Workflow State. */
  numStoryTemplates: number;
  /** The position that the Workflow State is in, starting with 0 at the left. */
  position: number;
  /** The time/date the Workflow State was created. */
  createdAt: Date;
};

const workflowStateProperties: s.Shape<WorkflowState> = {
  description: s.string(),
  entityType: s.string(),
  color: s.optional(s.string()),
  verb: s.nullable(s.string()),
  name: s.string(),
  globalId: s.string(),
  numStories: s.int(),
  type: s.string(),
  updatedAt: s.dateTime(),
  id: s.int(),
  numStoryTemplates: s.int(),
  position: s.int(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    globalId: "global_id",
    numStories: "num_stories",
    updatedAt: "updated_at",
    numStoryTemplates: "num_story_templates",
    createdAt: "created_at",
  },
};

export const workflowStateInternalSchema: Schema<WorkflowState> =
  s.object<WorkflowState>(workflowStateProperties);

export const workflowStateSchema: Schema<WorkflowState> = s.lazySchema(() =>
  s.object<WorkflowState>({
    ...workflowStateProperties,
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
