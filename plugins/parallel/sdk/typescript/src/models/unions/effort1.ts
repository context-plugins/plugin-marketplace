import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { effortSchema, type Effort } from "../effort.js";

/**
 * Controls how much research is performed, trading response time for answer quality. Defaults to
 * `medium` when omitted.
 */
export type Effort1 = Effort;

export const effort1Schema: Schema<Effort1> = s.of<Effort1>(s.union([s.lazy(() => effortSchema)]));
