import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Only return memories sourced from task, monitor, or FindAll runs completed at or after this RFC
 * 3339 timestamp.
 */
export type Since = Date;

export const sinceSchema: Schema<Since> = s.of<Since>(s.union([s.dateTime()]));
