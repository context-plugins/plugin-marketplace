import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Two-letter state, used only to narrow a `name` that matches in several states. */
export type State = string;

export const stateSchema: Schema<State> = s.of<State>(s.union([s.string()]));
