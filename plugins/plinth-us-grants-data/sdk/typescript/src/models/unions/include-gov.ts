import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type IncludeGov = string;

export const includeGovSchema: Schema<IncludeGov> = s.of<IncludeGov>(s.union([s.string()]));
