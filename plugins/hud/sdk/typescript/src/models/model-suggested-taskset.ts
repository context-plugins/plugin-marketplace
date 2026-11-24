import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { purpose1Schema, type Purpose1 } from "./unions/purpose1.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";

/** A taskset the model has not been evaluated on yet. */
export type ModelSuggestedTaskset = {
  tasksetId: string;
  tasksetName: string;
  isPublic: boolean;
  purpose?: Purpose1;
  taskCount: number;
  updatedAt?: UpdatedAt;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelSuggestedTasksetSchema: Schema<ModelSuggestedTaskset> = s.object<ModelSuggestedTaskset>(
  {
    tasksetId: s.string(),
    tasksetName: s.string(),
    isPublic: s.boolean(),
    purpose: s.optional(s.lazy(() => purpose1Schema)),
    taskCount: s.int(),
    updatedAt: s.optional(s.lazy(() => updatedAtSchema)),
    _keysMap: {
      tasksetId: "taskset_id",
      tasksetName: "taskset_name",
      isPublic: "is_public",
      taskCount: "task_count",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
