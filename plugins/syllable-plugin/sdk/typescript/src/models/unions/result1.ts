import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The optional result of the tool call. */
export type Result1 = Record<string, unknown>;

export const result1Schema: Schema<Result1> = s.of<Result1>(s.union([s.record(s.string(), s.unknown())]));
