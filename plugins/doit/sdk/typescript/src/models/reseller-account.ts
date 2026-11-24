import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { handshakeStateSchema, type HandshakeState } from "./handshake-state.js";
import {
  statusDoiTBillingTransferApiSchema,
  type StatusDoiTBillingTransferApi,
} from "./status-doi-tbilling-transfer-api.js";

export type ResellerAccount = {
  /** 12-digit AWS account ID of the reseller's program management account. */
  resellerPmaAccountId: string;
  dpmaId: string;
  handshakeId: string;
  /** AWS Organizations Handshake `State` value, lowercased. */
  handshakeState: HandshakeState;
  status: StatusDoiTBillingTransferApi;
  /** When the handshake reached a terminal state. `null` until then. */
  effectiveTime?: Date | null;
  createdAt: Date;
};

export const resellerAccountSchema: Schema<ResellerAccount> = s.object<ResellerAccount>({
  resellerPmaAccountId: s.string(),
  dpmaId: s.string(),
  handshakeId: s.string(),
  handshakeState: handshakeStateSchema,
  status: statusDoiTBillingTransferApiSchema,
  effectiveTime: s.optionalNullable(s.dateTime()),
  createdAt: s.dateTime(),
});
