import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipName = string;

export const recipNameSchema: Schema<RecipName> = s.of<RecipName>(s.union([s.string()]));
