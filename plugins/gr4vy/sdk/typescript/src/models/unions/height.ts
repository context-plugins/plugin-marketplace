import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Height = string;

export const heightSchema: Schema<Height> = s.of<Height>(s.union([s.string()]));
