import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { lifecycleStatusSchema, type LifecycleStatus } from "../lifecycle-status.js";

/**
 * Effective lifecycle status, resolved server-side against the current date. Populated on API
 * responses; unset in the static catalog.
 */
export type Status = LifecycleStatus;

export const statusSchema: Schema<Status> = s.of<Status>(s.union([s.lazy(() => lifecycleStatusSchema)]));
