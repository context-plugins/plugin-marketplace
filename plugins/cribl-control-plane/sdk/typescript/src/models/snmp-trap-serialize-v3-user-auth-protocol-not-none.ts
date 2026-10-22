import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authProtocol1Schema, type AuthProtocol1 } from "./auth-protocol1.js";
import { privacyProtocolSchema, type PrivacyProtocol } from "./privacy-protocol.js";

export type SnmpTrapSerializeV3UserAuthProtocolNotNone = {
  /** Authentication protocol for the SNMPv3 user. */
  authProtocol?: AuthProtocol1;
  /** Authentication key for SNMPv3 user. Required when an authentication protocol is selected. */
  authKey: string;
  /** Privacy protocol used to encrypt SNMPv3 messages. */
  privProtocol?: PrivacyProtocol;
  /** Username for the SNMPv3 user. */
  name: string;
};

export const snmpTrapSerializeV3UserAuthProtocolNotNoneSchema: Schema<SnmpTrapSerializeV3UserAuthProtocolNotNone> =
  s.object<SnmpTrapSerializeV3UserAuthProtocolNotNone>({
    authProtocol: s.optional(s.lazy(() => authProtocol1Schema)),
    authKey: s.string(),
    privProtocol: s.optional(s.lazy(() => privacyProtocolSchema)),
    name: s.string(),
  });
