import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Examples = Record<string, unknown>[];

export const examplesSchema: Schema<Examples> = s.of<Examples>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
