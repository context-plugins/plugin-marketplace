import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type From = number | string;

export const fromSchema: Schema<From> = s.of<From>(s.union([s.int(), s.string()]));
