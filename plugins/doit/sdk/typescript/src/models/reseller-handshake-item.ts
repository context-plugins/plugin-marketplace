import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResellerHandshakeItem = {
  /** DoiT customer ID of the reseller's end customer to issue a handshake for. */
  resellerCustomerId: string;
  /** 12-digit AWS account ID of the reseller's program management account (PMA). */
  resellerPmaAccountId: string;
};

export const resellerHandshakeItemSchema: Schema<ResellerHandshakeItem> = s.object<ResellerHandshakeItem>({
  resellerCustomerId: s.string(),
  resellerPmaAccountId: s.string(),
});
