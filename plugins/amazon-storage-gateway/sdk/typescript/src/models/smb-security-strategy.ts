import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of security strategy that was specified for file gateway. ClientSpecified: If you choose
 * this option, requests are established based on what is negotiated by the client. This option is
 * recommended when you want to maximize compatibility across different clients in your environment.
 * Supported only for S3 File Gateway. MandatorySigning: If you choose this option, File Gateway
 * only allows connections from SMBv2 or SMBv3 clients that have signing turned on. This option
 * works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later.
 * MandatoryEncryption: If you choose this
 */
export const SmbSecurityStrategy = {
  ClientSpecified: "ClientSpecified",
  MandatorySigning: "MandatorySigning",
  MandatoryEncryption: "MandatoryEncryption",
  MandatoryEncryptionNoAes128: "MandatoryEncryptionNoAes128",
} as const;
export type SmbSecurityStrategy =
  | (typeof SmbSecurityStrategy)[keyof typeof SmbSecurityStrategy]
  | (string & {});

export const smbSecurityStrategySchema: EnumSchema<SmbSecurityStrategy> =
  s.enumOf<SmbSecurityStrategy>(SmbSecurityStrategy);
