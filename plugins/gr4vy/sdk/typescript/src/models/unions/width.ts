import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Width = string;

export const widthSchema: Schema<Width> = s.of<Width>(s.union([s.string()]));
