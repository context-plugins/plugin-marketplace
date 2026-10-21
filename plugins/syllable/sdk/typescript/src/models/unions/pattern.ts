import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Pattern = string;

export const patternSchema: Schema<Pattern> = s.of<Pattern>(s.union([s.string()]));
