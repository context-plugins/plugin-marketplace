import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  createSubTaskParamsInternalSchema,
  createSubTaskParamsSchema,
  type CreateSubTaskParams,
} from "../create-sub-task-params.js";
import { linkSubTaskParamsSchema, type LinkSubTaskParams } from "../link-sub-task-params.js";

export type SubTask = LinkSubTaskParams | CreateSubTaskParams;

export const subTaskInternalSchema: Schema<SubTask> = s.of<SubTask>(
  s.union([s.lazy(() => linkSubTaskParamsSchema), s.lazy(() => createSubTaskParamsInternalSchema)]),
);

export const subTaskSchema: Schema<SubTask> = s.lazySchema(() =>
  s.of<SubTask>(s.union([s.lazy(() => linkSubTaskParamsSchema), s.lazy(() => createSubTaskParamsSchema)])),
);
