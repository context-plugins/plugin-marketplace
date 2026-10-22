import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNoneSchema,
  type SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone,
} from "../snmp-trap-serialize-v3-user-auth-protocol-not-none-priv-protocol-none.js";
import {
  snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneSchema,
  type SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone,
} from "../snmp-trap-serialize-v3-user-auth-protocol-not-none-priv-protocol-not-none.js";

export type BaseType1 =
  | (SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNone & { privProtocol: "none" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone & { privProtocol: "des" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone & { privProtocol: "aes" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone & { privProtocol: "aes256b" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNone & { privProtocol: "aes256r" });

export const baseType1Schema: Schema<BaseType1> = s.discriminatedUnion<BaseType1>("privProtocol", {
  none: snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNoneSchema,
  des: snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneSchema,
  aes: snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneSchema,
  aes256b: snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneSchema,
  aes256r: snmpTrapSerializeV3UserAuthProtocolNotNonePrivProtocolNotNoneSchema,
});
