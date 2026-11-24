import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * match summary / package / CVE / GHSA id, match model name/id, match title/summary, match server
 * name/description, match a product name
 */
export type Q = string;

export const qSchema: Schema<Q> = s.of<Q>(s.union([s.string()]));
