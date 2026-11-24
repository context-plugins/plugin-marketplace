import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Reason the session ended. */
export const Reason = {
  ClientRequest: "ClientRequest",
  TransferFailedNotConfigured: "TransferFailedNotConfigured",
  Action: "Action",
  Error: "Error",
  InfiniteLoopDetected: "InfiniteLoopDetected",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
