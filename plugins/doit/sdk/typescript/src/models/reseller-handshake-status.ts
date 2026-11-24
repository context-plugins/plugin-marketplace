import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of processing this batch item. */
export const ResellerHandshakeStatus = {
  HandshakeIssued: "handshake_issued",
  NoOp: "no_op",
  Mapped: "mapped",
  Remapped: "remapped",
  Failed: "failed",
} as const;
export type ResellerHandshakeStatus =
  | (typeof ResellerHandshakeStatus)[keyof typeof ResellerHandshakeStatus]
  | (string & {});

export const resellerHandshakeStatusSchema: EnumSchema<ResellerHandshakeStatus> =
  s.enumOf<ResellerHandshakeStatus>(ResellerHandshakeStatus);
