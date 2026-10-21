import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Path = string;

export const pathSchema: Schema<Path> = s.of<Path>(s.union([s.string()]));
