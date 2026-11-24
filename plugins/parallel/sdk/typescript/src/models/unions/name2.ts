import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An optional name for the participant. Provides the model information to differentiate between
 * participants of the same role.
 */
export type Name2 = string;

export const name2Schema: Schema<Name2> = s.of<Name2>(s.union([s.string()]));
