import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name for the participant to distinguish between participants with the same role. */
export type Name1 = string;

export const name1Schema: Schema<Name1> = s.of<Name1>(s.union([s.string()]));
