import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies whether the output provides the locations (offsets) of PII entities or a file in which
 * PII entities are redacted.
 */
export const Mode3 = {
  OnlyRedaction: "ONLY_REDACTION",
  OnlyOffsets: "ONLY_OFFSETS",
} as const;
export type Mode3 = (typeof Mode3)[keyof typeof Mode3] | (string & {});

export const mode3Schema: EnumSchema<Mode3> = s.enumOf<Mode3>(Mode3);
