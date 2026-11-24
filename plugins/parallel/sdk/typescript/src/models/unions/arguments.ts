import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Arguments = string;

export const argumentsSchema: Schema<Arguments> = s.of<Arguments>(s.union([s.string()]));
