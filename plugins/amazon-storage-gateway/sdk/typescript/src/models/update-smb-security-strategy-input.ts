import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { smbSecurityStrategy1Schema, type SmbSecurityStrategy1 } from "./smb-security-strategy1.js";

export type UpdateSmbSecurityStrategyInput = {
  gatewayArn: string;
  /**
   * Specifies the type of security strategy. ClientSpecified: If you choose this option, requests
   * are established based on what is negotiated by the client. This option is recommended when you
   * want to maximize compatibility across different clients in your environment. Supported only for
   * S3 File Gateway. MandatorySigning: If you choose this option, File Gateway only allows
   * connections from SMBv2 or SMBv3 clients that have signing enabled. This option works with SMB
   * clients on Microsoft Windows Vista, Windows Server 2008 or newer. MandatoryEncryption: If you
   * choose this option, File Gateway only al
   */
  smbSecurityStrategy: SmbSecurityStrategy1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateSmbSecurityStrategyInputSchema: Schema<UpdateSmbSecurityStrategyInput> =
  s.object<UpdateSmbSecurityStrategyInput>(
    {
      gatewayArn: s.string(),
      smbSecurityStrategy: smbSecurityStrategy1Schema,
      _keysMap: {
        gatewayArn: "GatewayARN",
        smbSecurityStrategy: "SMBSecurityStrategy",
      },
    },
    { additionalProperties: s.json() },
  );
