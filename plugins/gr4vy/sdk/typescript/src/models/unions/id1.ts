import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the user. */
export type Id1 = string;

export const id1Schema: Schema<Id1> = s.of<Id1>(s.union([s.string()]));
