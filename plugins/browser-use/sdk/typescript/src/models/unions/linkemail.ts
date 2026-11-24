import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Linkemail = string;

export const linkemailSchema: Schema<Linkemail> = s.of<Linkemail>(s.union([s.string()]));
