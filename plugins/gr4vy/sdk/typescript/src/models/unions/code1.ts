import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The error code. */
export type Code1 = string;

export const code1Schema: Schema<Code1> = s.of<Code1>(s.union([s.string()]));
