import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Strict = string;

export const strictSchema: Schema<Strict> = s.of<Strict>(s.union([s.string()]));
