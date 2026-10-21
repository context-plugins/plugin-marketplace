import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the tool call. */
export type Id = string;

export const idSchema: Schema<Id> = s.of<Id>(s.union([s.string()]));
