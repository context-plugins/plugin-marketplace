import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type To = number | string;

export const toSchema: Schema<To> = s.of<To>(s.union([s.int(), s.string()]));
