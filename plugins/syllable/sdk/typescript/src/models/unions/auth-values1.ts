import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AuthValues1 = string;

export const authValues1Schema: Schema<AuthValues1> = s.of<AuthValues1>(s.union([s.string()]));
