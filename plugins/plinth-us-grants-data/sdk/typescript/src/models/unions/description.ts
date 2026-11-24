import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Description = string;

export const descriptionSchema: Schema<Description> = s.of<Description>(s.union([s.string()]));
