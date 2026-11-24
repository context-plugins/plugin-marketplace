import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Compat = string;

export const compatSchema: Schema<Compat> = s.of<Compat>(s.union([s.string()]));
