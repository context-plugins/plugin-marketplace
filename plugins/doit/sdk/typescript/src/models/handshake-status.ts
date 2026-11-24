import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Per-AWS-Organizations-handshake-state counts across all tenants mapped to a PMA. */
export type HandshakeStatus = {
  total: number;
  requested: number;
  open: number;
  accepted: number;
  declined: number;
  canceled: number;
  expired: number;
};

export const handshakeStatusSchema: Schema<HandshakeStatus> = s.object<HandshakeStatus>({
  total: s.int(),
  requested: s.int(),
  open: s.int(),
  accepted: s.int(),
  declined: s.int(),
  canceled: s.int(),
  expired: s.int(),
});
