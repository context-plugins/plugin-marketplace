import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ResultIds = string[];

export const resultIdsSchema: Schema<ResultIds> = s.of<ResultIds>(s.union([s.array(s.string())]));
