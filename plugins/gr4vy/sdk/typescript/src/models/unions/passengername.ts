import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Traveler name. */
export type Passengername = string;

export const passengernameSchema: Schema<Passengername> = s.of<Passengername>(s.union([s.string()]));
