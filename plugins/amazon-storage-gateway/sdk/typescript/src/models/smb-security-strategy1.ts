import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the type of security strategy. ClientSpecified: If you choose this option, requests are
 * established based on what is negotiated by the client. This option is recommended when you want
 * to maximize compatibility across different clients in your environment. Supported only for S3
 * File Gateway. MandatorySigning: If you choose this option, File Gateway only allows connections
 * from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB clients on
 * Microsoft Windows Vista, Windows Server 2008 or newer. MandatoryEncryption: If you choose this
 * option, File Gateway only al
 */
export const SmbSecurityStrategy1 = {
  ClientSpecified: "ClientSpecified",
  MandatorySigning: "MandatorySigning",
  MandatoryEncryption: "MandatoryEncryption",
  MandatoryEncryptionNoAes128: "MandatoryEncryptionNoAes128",
} as const;
export type SmbSecurityStrategy1 =
  | (typeof SmbSecurityStrategy1)[keyof typeof SmbSecurityStrategy1]
  | (string & {});

export const smbSecurityStrategy1Schema: EnumSchema<SmbSecurityStrategy1> =
  s.enumOf<SmbSecurityStrategy1>(SmbSecurityStrategy1);
