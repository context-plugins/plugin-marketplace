import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateSubTaskParams = {
  /** The name of the SubTask. */
  name: string;
  /** An array of UUIDs of the owners of this story. */
  ownerIds?: string[];
  /** The ID of the workflow state the story will be in. */
  workflowStateId?: number;
};

const createSubTaskParamsProperties: s.Shape<CreateSubTaskParams> = {
  name: s.string(),
  ownerIds: s.optional(s.array(s.string())),
  workflowStateId: s.optional(s.int()),
  _keysMap: {
    ownerIds: "owner_ids",
    workflowStateId: "workflow_state_id",
  },
};

export const createSubTaskParamsInternalSchema: Schema<CreateSubTaskParams> = s.object<CreateSubTaskParams>(
  createSubTaskParamsProperties,
);

export const createSubTaskParamsSchema: Schema<CreateSubTaskParams> = s.lazySchema(() =>
  s.object<CreateSubTaskParams>({
    ...createSubTaskParamsProperties,
    name: s.string().check(s.minLength(1), s.maxLength(512)),
    ownerIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
  }),
);
