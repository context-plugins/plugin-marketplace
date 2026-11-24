import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateTask = {
  /** The Task description. */
  description: string;
  /** True/false boolean indicating whether the Task is completed. Defaults to false. */
  complete?: boolean;
  /** An array of UUIDs for any members you want to add as Owners on this new Task. */
  ownerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Task has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /**
   * Defaults to the time/date the Task is created but can be set to reflect another creation
   * time/date.
   */
  createdAt?: Date;
  /**
   * Defaults to the time/date the Task is created in Shortcut but can be set to reflect another
   * time/date.
   */
  updatedAt?: Date;
};

const createTaskProperties: s.Shape<CreateTask> = {
  description: s.string(),
  complete: s.optional(s.boolean()),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    ownerIds: "owner_ids",
    externalId: "external_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const createTaskInternalSchema: Schema<CreateTask> = s.object<CreateTask>(createTaskProperties);

export const createTaskSchema: Schema<CreateTask> = s.lazySchema(() =>
  s.object<CreateTask>({
    ...createTaskProperties,
    description: s.string().check(s.minLength(1), s.maxLength(2048)),
    externalId: s.optional(s.string().check(s.maxLength(128))),
  }),
);
