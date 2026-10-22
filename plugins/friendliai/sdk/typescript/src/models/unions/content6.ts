import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool result payload. Can be plain text, a list of objects, or null when no body is returned. */
export type Content6 = string | Record<string, unknown>[];

export const content6Schema: Schema<Content6> = s.of<Content6>(
  s.union([s.string(), s.array(s.record(s.string(), s.unknown()))]),
);
