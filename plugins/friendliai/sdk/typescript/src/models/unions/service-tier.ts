import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Compatibility field accepted for request portability. Parsed but not used for generation. */
export type ServiceTier = string | Record<string, unknown>;

export const serviceTierSchema: Schema<ServiceTier> = s.of<ServiceTier>(
  s.union([s.string(), s.record(s.string(), s.unknown())]),
);
