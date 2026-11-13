import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { epicStateInternalSchema, epicStateSchema, type EpicState } from "./epic-state.js";

/**
 * Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but
 * must be updated in the Shortcut UI.
 */
export type EpicWorkflow = {
  /** A string description of this resource. */
  entityType: string;
  /** The unique ID of the Epic Workflow. */
  id: number;
  /** The date the Epic Workflow was created. */
  createdAt: Date;
  /** The date the Epic Workflow was updated. */
  updatedAt: Date;
  /** The unique ID of the default Epic State that new Epics are assigned by default. */
  defaultEpicStateId: number;
  /** A map of the Epic States in this Epic Workflow. */
  epicStates: EpicState[];
};

const epicWorkflowProperties: s.Shape<EpicWorkflow> = {
  entityType: s.string(),
  id: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  defaultEpicStateId: s.int(),
  epicStates: s.array(s.lazy(() => epicStateInternalSchema)),
  _keysMap: {
    entityType: "entity_type",
    createdAt: "created_at",
    updatedAt: "updated_at",
    defaultEpicStateId: "default_epic_state_id",
    epicStates: "epic_states",
  },
};

export const epicWorkflowInternalSchema: Schema<EpicWorkflow> =
  s.object<EpicWorkflow>(epicWorkflowProperties);

export const epicWorkflowSchema: Schema<EpicWorkflow> = s.lazySchema(() =>
  s.object<EpicWorkflow>({
    ...epicWorkflowProperties,
    epicStates: s.array(s.lazy(() => epicStateSchema)),
  }),
);
