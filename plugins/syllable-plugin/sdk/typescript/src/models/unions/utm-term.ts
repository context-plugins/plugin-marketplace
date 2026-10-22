import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UtmTerm = string;

export const utmTermSchema: Schema<UtmTerm> = s.of<UtmTerm>(s.union([s.string()]));
