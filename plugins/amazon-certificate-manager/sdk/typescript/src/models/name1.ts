import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of an Extended Key Usage value. */
export const Name1 = {
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
export type Name1 = (typeof Name1)[keyof typeof Name1] | (string & {});

export const name1Schema: EnumSchema<Name1> = s.enumOf<Name1>(Name1);
