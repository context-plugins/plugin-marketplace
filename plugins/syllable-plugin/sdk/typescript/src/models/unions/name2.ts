import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the channel */
export type Name2 = string;

export const name2Schema: Schema<Name2> = s.of<Name2>(s.union([s.string()]));
