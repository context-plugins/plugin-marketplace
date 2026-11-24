import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipEin = string;

export const recipEinSchema: Schema<RecipEin> = s.of<RecipEin>(s.union([s.string()]));
