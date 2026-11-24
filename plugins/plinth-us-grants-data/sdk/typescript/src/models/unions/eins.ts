import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Eins = string[];

export const einsSchema: Schema<Eins> = s.of<Eins>(s.union([s.array(s.string())]));
