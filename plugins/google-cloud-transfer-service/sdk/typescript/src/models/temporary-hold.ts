import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies how each object's temporary hold status should be preserved for transfers between
 * Google Cloud Storage buckets. If unspecified, the default behavior is the same as
 * TEMPORARY_HOLD_PRESERVE.
 */
export const TemporaryHold = {
  TemporaryHoldUnspecified: "TEMPORARY_HOLD_UNSPECIFIED",
  TemporaryHoldSkip: "TEMPORARY_HOLD_SKIP",
  TemporaryHoldPreserve: "TEMPORARY_HOLD_PRESERVE",
} as const;
export type TemporaryHold = (typeof TemporaryHold)[keyof typeof TemporaryHold] | (string & {});

export const temporaryHoldSchema: EnumSchema<TemporaryHold> = s.enumOf<TemporaryHold>(TemporaryHold);
