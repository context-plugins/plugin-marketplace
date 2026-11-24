import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Refusal1 = string;

export const refusal1Schema: Schema<Refusal1> = s.of<Refusal1>(s.union([s.string()]));
