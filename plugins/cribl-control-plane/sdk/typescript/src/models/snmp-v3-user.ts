import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationProtocolSchema, type AuthenticationProtocol } from "./authentication-protocol.js";
import { privacyProtocol1Schema, type PrivacyProtocol1 } from "./privacy-protocol1.js";
import { v3AuthenticationKeyTypeSchema, type V3AuthenticationKeyType } from "./v3-authentication-key-type.js";
import { v3PrivacyKeyTypeSchema, type V3PrivacyKeyType } from "./v3-privacy-key-type.js";

export type SnmpV3User = {
  /** SNMPv3 security name. */
  name: string;
  /** Authentication protocol for the SNMPv3 user. */
  authProtocol?: AuthenticationProtocol;
  /** Select Manual to enter the key directly, or Secret to use a stored text secret */
  authKeyType?: V3AuthenticationKeyType;
  /** Authentication key for the SNMPv3 user. */
  authKey?: string;
  /** Select or create a stored text secret */
  authKeySecret?: string;
  /** Privacy protocol */
  privProtocol?: PrivacyProtocol1;
  /** Select Manual to enter the key directly, or Secret to use a stored text secret */
  privKeyType?: V3PrivacyKeyType;
  /** Privacy key for the SNMPv3 user. */
  privKey?: string;
  /** Select or create a stored text secret */
  privKeySecret?: string;
};

export const snmpV3UserSchema: Schema<SnmpV3User> = s.object<SnmpV3User>({
  name: s.string(),
  authProtocol: s.optional(s.lazy(() => authenticationProtocolSchema)),
  authKeyType: s.optional(s.lazy(() => v3AuthenticationKeyTypeSchema)),
  authKey: s.optional(s.string()),
  authKeySecret: s.optional(s.string()),
  privProtocol: s.optional(s.lazy(() => privacyProtocol1Schema)),
  privKeyType: s.optional(s.lazy(() => v3PrivacyKeyTypeSchema)),
  privKey: s.optional(s.string()),
  privKeySecret: s.optional(s.string()),
});
