import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Result = Record<string, unknown>;

export const resultSchema: Schema<Result> = s.of<Result>(s.union([s.record(s.string(), s.unknown())]));
