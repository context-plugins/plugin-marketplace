import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the test. */
export const Status = {
  TestStatusUnspecified: "TEST_STATUS_UNSPECIFIED",
  Complete: "COMPLETE",
  InternalError: "INTERNAL_ERROR",
  PageUnreachable: "PAGE_UNREACHABLE",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
