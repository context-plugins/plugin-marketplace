import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unique ID of the custom tool call output. */
export type Id5 = string;

export const id5Schema: Schema<Id5> = s.of<Id5>(s.union([s.string()]));
