import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ResultText = string;

export const resultTextSchema: Schema<ResultText> = s.of<ResultText>(s.union([s.string()]));
