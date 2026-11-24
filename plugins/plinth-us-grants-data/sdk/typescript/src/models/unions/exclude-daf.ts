import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExcludeDaf = string;

export const excludeDafSchema: Schema<ExcludeDaf> = s.of<ExcludeDaf>(s.union([s.string()]));
