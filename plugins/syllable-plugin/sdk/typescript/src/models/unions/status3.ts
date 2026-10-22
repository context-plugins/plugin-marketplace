import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { lifecycleStatusSchema, type LifecycleStatus } from "../lifecycle-status.js";

/** Effective lifecycle status, resolved server-side against the current date. */
export type Status3 = LifecycleStatus;

export const status3Schema: Schema<Status3> = s.of<Status3>(s.union([s.lazy(() => lifecycleStatusSchema)]));
