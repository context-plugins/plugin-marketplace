import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authProtocolSchema, type AuthProtocol } from "./auth-protocol.js";

export type SnmpTrapSerializeV3UserAuthProtocolNone = {
  /** Authentication protocol for the SNMPv3 user. */
  authProtocol?: AuthProtocol;
};

export const snmpTrapSerializeV3UserAuthProtocolNoneSchema: Schema<SnmpTrapSerializeV3UserAuthProtocolNone> =
  s.object<SnmpTrapSerializeV3UserAuthProtocolNone>({
    authProtocol: s.optional(s.lazy(() => authProtocolSchema)),
  });
