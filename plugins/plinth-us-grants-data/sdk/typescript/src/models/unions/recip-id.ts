import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipId = string;

export const recipIdSchema: Schema<RecipId> = s.of<RecipId>(s.union([s.string()]));
