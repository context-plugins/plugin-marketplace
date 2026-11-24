import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateTask = {
  /** The Task's description. */
  description?: string;
  /** An array of UUIDs of the owners of this story. */
  ownerIds?: string[];
  /** A true/false boolean indicating whether the task is complete. */
  complete?: boolean;
  /** Move task before this task ID. */
  beforeId?: number;
  /** Move task after this task ID. */
  afterId?: number;
};

const updateTaskProperties: s.Shape<UpdateTask> = {
  description: s.optional(s.string()),
  ownerIds: s.optional(s.array(s.string())),
  complete: s.optional(s.boolean()),
  beforeId: s.optional(s.int()),
  afterId: s.optional(s.int()),
  _keysMap: {
    ownerIds: "owner_ids",
    beforeId: "before_id",
    afterId: "after_id",
  },
};

export const updateTaskInternalSchema: Schema<UpdateTask> = s.object<UpdateTask>(updateTaskProperties);

export const updateTaskSchema: Schema<UpdateTask> = s.lazySchema(() =>
  s.object<UpdateTask>({
    ...updateTaskProperties,
    description: s.optional(s.string().check(s.minLength(1), s.maxLength(2048))),
  }),
);
