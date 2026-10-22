import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Auth value keys (values omitted for security) */
export type AuthValueKeys1 = string[];

export const authValueKeys1Schema: Schema<AuthValueKeys1> = s.of<AuthValueKeys1>(
  s.union([s.array(s.string())]),
);
