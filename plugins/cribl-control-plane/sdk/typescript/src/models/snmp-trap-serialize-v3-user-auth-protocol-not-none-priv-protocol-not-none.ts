import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { privProtocol1Schema, type PrivProtocol1 } from "./priv-protocol1.js";

export type SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone = {
  /** Privacy protocol used to encrypt SNMPv3 messages. */
  privProtocol?: PrivProtocol1;
  /** Privacy key for SNMPv3 encryption. Required when a privacy protocol is selected. */
  privKey: string;
};

export const snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneSchema: Schema<SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone> =
  s.object<SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone>({
    privProtocol: s.optional(s.lazy(() => privProtocol1Schema)),
    privKey: s.string(),
  });
