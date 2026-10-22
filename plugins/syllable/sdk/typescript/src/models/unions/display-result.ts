import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Display-only presentation data for this tool result */
export type DisplayResult = Record<string, unknown>;

export const displayResultSchema: Schema<DisplayResult> = s.of<DisplayResult>(
  s.union([s.record(s.string(), s.unknown())]),
);
