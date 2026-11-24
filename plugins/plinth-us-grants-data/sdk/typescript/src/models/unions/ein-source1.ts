import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EinSource1 = string;

export const einSource1Schema: Schema<EinSource1> = s.of<EinSource1>(s.union([s.string()]));
