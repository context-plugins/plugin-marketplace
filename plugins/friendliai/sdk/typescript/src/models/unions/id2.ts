import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The unique ID of the function tool call. */
export type Id2 = string;

export const id2Schema: Schema<Id2> = s.of<Id2>(s.union([s.string()]));
