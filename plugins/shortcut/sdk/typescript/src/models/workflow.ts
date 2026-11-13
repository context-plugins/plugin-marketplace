import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workflowStateInternalSchema, workflowStateSchema, type WorkflowState } from "./workflow-state.js";

/**
 * Workflow is the array of defined Workflow States. Workflow can be queried using the API but must
 * be updated in the Shortcut UI.
 */
export type Workflow = {
  /** A description of the workflow. */
  description: string;
  /** A string description of this resource. */
  entityType: string;
  /** An array of IDs of projects within the Workflow. */
  projectIds: number[];
  /** A map of the states in this Workflow. */
  states: WorkflowState[];
  /** The name of the workflow. */
  name: string;
  /** The date the Workflow was updated. */
  updatedAt: Date;
  /** Indicates if an owner is automatically assigned when an unowned story is started. */
  autoAssignOwner: boolean;
  /** The unique ID of the Workflow. */
  id: number;
  /** The ID of the team the workflow belongs to. */
  teamId: number;
  /** The date the Workflow was created. */
  createdAt: Date;
  /** The unique ID of the default state that new Stories are entered into. */
  defaultStateId: number;
};

const workflowProperties: s.Shape<Workflow> = {
  description: s.string(),
  entityType: s.string(),
  projectIds: s.array(s.float64()),
  states: s.array(s.lazy(() => workflowStateInternalSchema)),
  name: s.string(),
  updatedAt: s.dateTime(),
  autoAssignOwner: s.boolean(),
  id: s.int(),
  teamId: s.int(),
  createdAt: s.dateTime(),
  defaultStateId: s.int(),
  _keysMap: {
    entityType: "entity_type",
    projectIds: "project_ids",
    updatedAt: "updated_at",
    autoAssignOwner: "auto_assign_owner",
    teamId: "team_id",
    createdAt: "created_at",
    defaultStateId: "default_state_id",
  },
};

export const workflowInternalSchema: Schema<Workflow> = s.object<Workflow>(workflowProperties);

export const workflowSchema: Schema<Workflow> = s.lazySchema(() =>
  s.object<Workflow>({
    ...workflowProperties,
    states: s.array(s.lazy(() => workflowStateSchema)),
  }),
);
