import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { status3Schema, type Status3 } from "../status3.js";

/**
 * The status of the response generation. One of `completed`, `failed`, `in_progress`, `cancelled`,
 * `queued`, or `incomplete`.
 */
export type Status31 = Status3;

export const status31Schema: Schema<Status31> = s.of<Status31>(s.union([s.lazy(() => status3Schema)]));
