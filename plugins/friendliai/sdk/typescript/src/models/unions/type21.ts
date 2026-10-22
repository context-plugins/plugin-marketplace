import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Tool category. If missing, empty, or `custom`, it is converted to a function tool. Any non-empty
 * value other than `custom` is treated as a server-side tool and skipped.
 */
export type Type21 = string;

export const type21Schema: Schema<Type21> = s.of<Type21>(s.union([s.string()]));
