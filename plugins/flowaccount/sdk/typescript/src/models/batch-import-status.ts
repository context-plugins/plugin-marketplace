import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = None 1 = Awaiting 3 = Pending 5 = Failed 6 = HandledDuplicated 7 = Succeed */
export const BatchImportStatus = {
  _0: 0,
  _1: 1,
  _3: 3,
  _5: 5,
  _6: 6,
  _7: 7,
} as const;
export type BatchImportStatus = (typeof BatchImportStatus)[keyof typeof BatchImportStatus] | (number & {});

export const batchImportStatusSchema: EnumSchema<BatchImportStatus> =
  s.enumOf<BatchImportStatus>(BatchImportStatus);
