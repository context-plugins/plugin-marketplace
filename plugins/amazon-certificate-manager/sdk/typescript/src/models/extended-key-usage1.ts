import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by extended key usage. */
export const ExtendedKeyUsage1 = {
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
export type ExtendedKeyUsage1 = (typeof ExtendedKeyUsage1)[keyof typeof ExtendedKeyUsage1] | (string & {});

export const extendedKeyUsage1Schema: EnumSchema<ExtendedKeyUsage1> =
  s.enumOf<ExtendedKeyUsage1>(ExtendedKeyUsage1);
