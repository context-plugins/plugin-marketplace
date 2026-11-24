import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Limit = string;

export const limitSchema: Schema<Limit> = s.of<Limit>(s.union([s.string()]));
