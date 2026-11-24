import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Disliked = string;

export const dislikedSchema: Schema<Disliked> = s.of<Disliked>(s.union([s.string()]));
