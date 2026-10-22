import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the incremental authorization. */
export const IncrementalAuthorizationStatus1 = {
  Succeeded: "succeeded",
  Failed: "failed",
  Pending: "pending",
} as const;
export type IncrementalAuthorizationStatus1 =
  | (typeof IncrementalAuthorizationStatus1)[keyof typeof IncrementalAuthorizationStatus1]
  | (string & {});

export const incrementalAuthorizationStatus1Schema: EnumSchema<IncrementalAuthorizationStatus1> =
  s.enumOf<IncrementalAuthorizationStatus1>(IncrementalAuthorizationStatus1);
