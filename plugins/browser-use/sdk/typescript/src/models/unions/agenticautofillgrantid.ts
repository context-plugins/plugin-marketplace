import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Agenticautofillgrantid = string;

export const agenticautofillgrantidSchema: Schema<Agenticautofillgrantid> = s.of<Agenticautofillgrantid>(
  s.union([s.string()]),
);
