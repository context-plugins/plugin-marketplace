import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** "user" or "agent" (transcript events) */
export type Source5 = string;

export const source5Schema: Schema<Source5> = s.of<Source5>(s.union([s.string()]));
