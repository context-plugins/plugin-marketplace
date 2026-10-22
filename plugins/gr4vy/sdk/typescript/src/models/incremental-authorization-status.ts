import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncrementalAuthorizationStatus = {
  Succeeded: "succeeded",
  Failed: "failed",
  Pending: "pending",
} as const;
export type IncrementalAuthorizationStatus =
  | (typeof IncrementalAuthorizationStatus)[keyof typeof IncrementalAuthorizationStatus]
  | (string & {});

export const incrementalAuthorizationStatusSchema: EnumSchema<IncrementalAuthorizationStatus> =
  s.enumOf<IncrementalAuthorizationStatus>(IncrementalAuthorizationStatus);
