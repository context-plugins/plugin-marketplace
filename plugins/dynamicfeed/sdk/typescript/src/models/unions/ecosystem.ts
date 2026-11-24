import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** npm | pip | maven | go | rubygems | nuget | composer | ... */
export type Ecosystem = string;

export const ecosystemSchema: Schema<Ecosystem> = s.of<Ecosystem>(s.union([s.string()]));
