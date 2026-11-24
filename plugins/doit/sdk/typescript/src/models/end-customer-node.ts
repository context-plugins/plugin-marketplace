import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { handshakeStateSchema, type HandshakeState } from "./handshake-state.js";
import { status1Schema, type Status1 } from "./status1.js";

export type EndCustomerNode = {
  /** 12-digit AWS account ID of the end-customer account. */
  ecAccountId: string;
  /** DoiT customer ID the end-customer account is mapped to. */
  ecCustomerId: string;
  status: Status1;
  /** AWS Organizations Handshake `State` value, lowercased. */
  handshakeState: HandshakeState;
  billSourceType: string;
  /**
   * S3 key prefix where this end customer's CUR data lands. Omitted when no path was recorded at
   * mapping time.
   */
  curBasePath?: string;
  /** When the handshake reached a terminal state. `null` until then. */
  effectiveTime?: Date | null;
  createdAt: Date;
  /** When this mapping's status was last refreshed. `null` if never refreshed. */
  lastRefreshTime?: Date | null;
};

export const endCustomerNodeSchema: Schema<EndCustomerNode> = s.object<EndCustomerNode>({
  ecAccountId: s.string(),
  ecCustomerId: s.string(),
  status: status1Schema,
  handshakeState: handshakeStateSchema,
  billSourceType: s.string(),
  curBasePath: s.optional(s.string()),
  effectiveTime: s.optionalNullable(s.dateTime()),
  createdAt: s.dateTime(),
  lastRefreshTime: s.optionalNullable(s.dateTime()),
});
