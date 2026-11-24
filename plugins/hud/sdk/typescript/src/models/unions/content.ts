import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Content = string | Record<string, unknown>[];

export const contentSchema: Schema<Content> = s.of<Content>(
  s.union([s.string(), s.array(s.record(s.string(), s.unknown()))]),
);
