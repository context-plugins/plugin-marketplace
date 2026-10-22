import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID for the buyer. */
export type Id6 = string;

export const id6Schema: Schema<Id6> = s.of<Id6>(s.union([s.string()]));
