import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The state, county, or province for the address. */
export type State = string;

export const stateSchema: Schema<State> = s.of<State>(s.union([s.string()]));
