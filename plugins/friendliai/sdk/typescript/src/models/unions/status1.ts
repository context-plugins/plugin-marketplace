import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { statusSchema, type Status } from "../status.js";

/** The status of the item. One of `in_progress`, `completed`, or `incomplete`. */
export type Status1 = Status;

export const status1Schema: Schema<Status1> = s.of<Status1>(s.union([s.lazy(() => statusSchema)]));
