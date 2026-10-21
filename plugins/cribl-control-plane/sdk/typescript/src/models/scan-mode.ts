import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Acceleration scan mode. <code>quick</code> collects object-level metadata; <code>detailed</code>
 * also collects field-level statistics.
 */
export const ScanMode = {
  Detailed: "detailed",
  Quick: "quick",
} as const;
export type ScanMode = (typeof ScanMode)[keyof typeof ScanMode] | (string & {});

export const scanModeSchema: EnumSchema<ScanMode> = s.enumOf<ScanMode>(ScanMode);
