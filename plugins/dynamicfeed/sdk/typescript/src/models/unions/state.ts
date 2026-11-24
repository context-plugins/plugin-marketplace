import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** filter to a US state, e.g. CA, TX (2-letter) */
export type State = string;

export const stateSchema: Schema<State> = s.of<State>(s.union([s.string()]));
