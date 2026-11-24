import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ByokName = string;

export const byokNameSchema: Schema<ByokName> = s.of<ByokName>(s.union([s.string()]));
