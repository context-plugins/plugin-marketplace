import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Conflict Detection strategy to use. VERSION: Detect conflicts based on object versions for
 * this resolver. NONE: Do not detect conflicts when invoking this resolver.
 */
export const ConflictDetection = {
  Version: "VERSION",
  None: "NONE",
} as const;
export type ConflictDetection = (typeof ConflictDetection)[keyof typeof ConflictDetection] | (string & {});

export const conflictDetectionSchema: EnumSchema<ConflictDetection> =
  s.enumOf<ConflictDetection>(ConflictDetection);
