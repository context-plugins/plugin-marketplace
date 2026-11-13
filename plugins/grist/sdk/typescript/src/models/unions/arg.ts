import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Arg = number | string;

export const argSchema: Schema<Arg> = s.of<Arg>(s.union([s.float64(), s.string()]));
