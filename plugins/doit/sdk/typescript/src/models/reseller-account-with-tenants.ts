import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endCustomerNodeSchema, type EndCustomerNode } from "./end-customer-node.js";
import { handshakeStateSchema, type HandshakeState } from "./handshake-state.js";
import { handshakeStatusSchema, type HandshakeStatus } from "./handshake-status.js";
import {
  statusDoiTBillingTransferApiSchema,
  type StatusDoiTBillingTransferApi,
} from "./status-doi-tbilling-transfer-api.js";

export type ResellerAccountWithTenants = {
  /** 12-digit AWS account ID of the reseller's program management account. */
  resellerPmaAccountId: string;
  dpmaId: string;
  handshakeId: string;
  /** AWS Organizations Handshake `State` value, lowercased. */
  handshakeState: HandshakeState;
  status: StatusDoiTBillingTransferApi;
  /** Inherited from the parent DPMA root; the reseller node itself carries no region metadata. */
  region: string;
  /** Inherited from the parent DPMA root; the reseller node itself carries no IAM metadata. */
  iamStatus: string;
  /** Inherited from the parent DPMA root. `null` if never refreshed. */
  lastRefreshTime?: Date | null;
  /** When the handshake reached a terminal state. `null` until then. */
  effectiveTime?: Date | null;
  createdAt: Date;
  /** Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA. */
  handshakeStatus: HandshakeStatus;
  tenants: EndCustomerNode[];
};

export const resellerAccountWithTenantsSchema: Schema<ResellerAccountWithTenants> =
  s.object<ResellerAccountWithTenants>({
    resellerPmaAccountId: s.string(),
    dpmaId: s.string(),
    handshakeId: s.string(),
    handshakeState: handshakeStateSchema,
    status: statusDoiTBillingTransferApiSchema,
    region: s.string(),
    iamStatus: s.string(),
    lastRefreshTime: s.optionalNullable(s.dateTime()),
    effectiveTime: s.optionalNullable(s.dateTime()),
    createdAt: s.dateTime(),
    handshakeStatus: handshakeStatusSchema,
    tenants: s.array(s.lazy(() => endCustomerNodeSchema)),
  });
