import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privProtocolSchema, type PrivProtocol } from "./priv-protocol.js";

export type SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone = {
  /** Privacy protocol used to encrypt SNMPv3 messages. */
  privProtocol?: PrivProtocol;
};

export const snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNoneSchema: Schema<SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone> =
  s.object<SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone>({
    privProtocol: s.optional(s.lazy(() => privProtocolSchema)),
  });
