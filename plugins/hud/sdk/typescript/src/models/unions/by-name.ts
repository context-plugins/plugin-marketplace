import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ByName = string;

export const byNameSchema: Schema<ByName> = s.of<ByName>(s.union([s.string()]));
