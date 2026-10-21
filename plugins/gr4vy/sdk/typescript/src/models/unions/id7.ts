import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID for the shipping details. */
export type Id7 = string;

export const id7Schema: Schema<Id7> = s.of<Id7>(s.union([s.string()]));
