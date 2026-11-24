import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type State1 = string;

export const state1Schema: Schema<State1> = s.of<State1>(s.union([s.string()]));
