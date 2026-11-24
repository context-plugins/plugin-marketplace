import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Background mode is not supported: requests with `background=true` are rejected with a 422
 * validation error. Use the Task API (POST /v1/tasks/runs) for long-running work.
 */
export type Background1 = boolean;

export const background1Schema: Schema<Background1> = s.of<Background1>(s.union([s.boolean()]));
