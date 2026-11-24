import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipState = string;

export const recipStateSchema: Schema<RecipState> = s.of<RecipState>(s.union([s.string()]));
