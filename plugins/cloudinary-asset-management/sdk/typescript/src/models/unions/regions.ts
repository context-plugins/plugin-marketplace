import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Named region coordinate groups for cropping with region gravity. Can be a JSON-encoded string or
 * an object. Each region name may contain only letters, numbers, or hyphens, and must have at least
 * two coordinate pairs.
 */
export type Regions = string | Record<string, unknown>;

export const regionsSchema: Schema<Regions> = s.of<Regions>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
