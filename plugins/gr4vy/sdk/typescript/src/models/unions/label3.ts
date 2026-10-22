import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Label3 = string;

export const label3Schema: Schema<Label3> = s.of<Label3>(s.union([s.string()]));
