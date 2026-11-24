import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** npm | pip | maven | go | rubygems | nuget | cargo | composer */
export type Ecosystem1 = string;

export const ecosystem1Schema: Schema<Ecosystem1> = s.of<Ecosystem1>(s.union([s.string()]));
