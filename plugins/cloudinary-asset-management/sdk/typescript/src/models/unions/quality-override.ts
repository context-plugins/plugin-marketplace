import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Override the quality setting for this asset. */
export type QualityOverride = string | number;

export const qualityOverrideSchema: Schema<QualityOverride> = s.of<QualityOverride>(
  s.union([s.string(), s.int()]),
);
