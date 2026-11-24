import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskIds = string[];

export const taskIdsInternalSchema: Schema<TaskIds> = s.of<TaskIds>(s.union([s.array(s.string())]));

export const taskIdsSchema: Schema<TaskIds> = s.lazySchema(() =>
  s.of<TaskIds>(s.union([s.array(s.string()).check(s.minLength(1), s.maxLength(100))])),
);
