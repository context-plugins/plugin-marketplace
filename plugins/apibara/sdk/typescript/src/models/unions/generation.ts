import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Generation = string | string[];

export const generationSchema: Schema<Generation> = s.of<Generation>(
  s.union([s.string(), s.array(s.string())]),
);
