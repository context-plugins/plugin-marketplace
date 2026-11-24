import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type By = string;

export const bySchema: Schema<By> = s.of<By>(s.union([s.string()]));
