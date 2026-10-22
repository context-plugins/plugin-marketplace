import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  snmpTrapSerializeV3UserAuthProtocolNoneSchema,
  type SnmpTrapSerializeV3UserAuthProtocolNone,
} from "../snmp-trap-serialize-v3-user-auth-protocol-none.js";
import {
  snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
  type SnmpTrapSerializeV3UserAuthProtocolNotNone,
} from "../snmp-trap-serialize-v3-user-auth-protocol-not-none.js";

export type BaseType7 =
  | (SnmpTrapSerializeV3UserAuthProtocolNone & { authProtocol: "none" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNone & { authProtocol: "md5" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNone & { authProtocol: "sha" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNone & { authProtocol: "sha224" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNone & { authProtocol: "sha256" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNone & { authProtocol: "sha384" })
  | (SnmpTrapSerializeV3UserAuthProtocolNotNone & { authProtocol: "sha512" });

export const baseType7Schema: Schema<BaseType7> = s.discriminatedUnion<BaseType7>("authProtocol", {
  none: snmpTrapSerializeV3UserAuthProtocolNoneSchema,
  md5: snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
  sha: snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
  sha224: snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
  sha256: snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
  sha384: snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
  sha512: snmpTrapSerializeV3UserAuthProtocolNotNoneSchema,
});
