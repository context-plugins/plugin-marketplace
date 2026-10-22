import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The type of the custom data field. */
export type Type521 = string;

export const type521Schema: Schema<Type521> = s.of<Type521>(s.union([s.string()]));
