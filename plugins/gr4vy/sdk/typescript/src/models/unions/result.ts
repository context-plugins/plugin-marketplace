import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The MAC to return for this request. */
export type Result = string;

export const resultSchema: Schema<Result> = s.of<Result>(s.union([s.string()]));
