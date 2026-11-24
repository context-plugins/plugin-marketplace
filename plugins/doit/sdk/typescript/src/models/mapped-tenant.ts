import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { handshakeStateSchema, type HandshakeState } from "./handshake-state.js";

export type MappedTenant = {
  customerId: string;
  tenantType: string;
  parentTenant: string;
  displayName: string;
  resellerPmaAccountId: string;
  /** AWS Organizations Handshake `State` value, lowercased. */
  handshakeState: HandshakeState;
  status: string;
  /** When the handshake reached a terminal state. `null` until then. */
  effectiveTime?: Date | null;
};

export const mappedTenantSchema: Schema<MappedTenant> = s.object<MappedTenant>({
  customerId: s.string(),
  tenantType: s.string(),
  parentTenant: s.string(),
  displayName: s.string(),
  resellerPmaAccountId: s.string(),
  handshakeState: handshakeStateSchema,
  status: s.string(),
  effectiveTime: s.optionalNullable(s.dateTime()),
});
