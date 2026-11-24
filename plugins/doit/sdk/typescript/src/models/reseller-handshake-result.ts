import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { handshakeStateSchema, type HandshakeState } from "./handshake-state.js";
import { resellerHandshakeErrorSchema, type ResellerHandshakeError } from "./reseller-handshake-error.js";
import { resellerHandshakeStatusSchema, type ResellerHandshakeStatus } from "./reseller-handshake-status.js";

export type ResellerHandshakeResult = {
  resellerCustomerId: string;
  resellerPmaAccountId: string;
  /** Outcome of processing this batch item. */
  status: ResellerHandshakeStatus;
  /**
   * AWS Organizations handshake ID. Absent when no handshake was issued (e.g. `no_op`, `failed`, or
   * dry run).
   */
  handshakeId?: string;
  /** AWS Organizations Handshake `State` value, lowercased. */
  handshakeState?: HandshakeState;
  error?: ResellerHandshakeError;
};

export const resellerHandshakeResultSchema: Schema<ResellerHandshakeResult> =
  s.object<ResellerHandshakeResult>({
    resellerCustomerId: s.string(),
    resellerPmaAccountId: s.string(),
    status: resellerHandshakeStatusSchema,
    handshakeId: s.optional(s.string()),
    handshakeState: s.optional(s.lazy(() => handshakeStateSchema)),
    error: s.optional(s.lazy(() => resellerHandshakeErrorSchema)),
  });
