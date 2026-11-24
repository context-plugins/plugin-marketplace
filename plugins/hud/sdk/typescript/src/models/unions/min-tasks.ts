import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Only tasksets with at least this many live tasks */
export type MinTasks = number;

export const minTasksInternalSchema: Schema<MinTasks> = s.of<MinTasks>(s.union([s.int()]));

export const minTasksSchema: Schema<MinTasks> = s.lazySchema(() =>
  s.of<MinTasks>(s.union([s.int().check(s.gte(0))])),
);
