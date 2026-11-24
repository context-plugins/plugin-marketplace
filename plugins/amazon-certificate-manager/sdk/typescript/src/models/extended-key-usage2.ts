import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExtendedKeyUsage2 = {
  TlsWebServerAuthentication: "TLS_WEB_SERVER_AUTHENTICATION",
  TlsWebClientAuthentication: "TLS_WEB_CLIENT_AUTHENTICATION",
  CodeSigning: "CODE_SIGNING",
  EmailProtection: "EMAIL_PROTECTION",
  TimeStamping: "TIME_STAMPING",
  OcspSigning: "OCSP_SIGNING",
  IpsecEndSystem: "IPSEC_END_SYSTEM",
  IpsecTunnel: "IPSEC_TUNNEL",
  IpsecUser: "IPSEC_USER",
  Any: "ANY",
  None: "NONE",
  Custom: "CUSTOM",
} as const;
export type ExtendedKeyUsage2 = (typeof ExtendedKeyUsage2)[keyof typeof ExtendedKeyUsage2] | (string & {});

export const extendedKeyUsage2Schema: EnumSchema<ExtendedKeyUsage2> =
  s.enumOf<ExtendedKeyUsage2>(ExtendedKeyUsage2);
