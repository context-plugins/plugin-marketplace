import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activeDirectoryStatusSchema, type ActiveDirectoryStatus } from "./active-directory-status.js";
import { smbLocalGroupsSchema, type SmbLocalGroups } from "./smb-local-groups.js";
import { smbSecurityStrategySchema, type SmbSecurityStrategy } from "./smb-security-strategy.js";

export type DescribeSmbSettingsOutput = {
  gatewayArn?: string;
  /** The name of the domain that the gateway is joined to. */
  domainName?: string;
  /**
   * Indicates the status of a gateway that is a member of the Active Directory domain. This field
   * is only used as part of a JoinDomain request. It is not affected by Active Directory
   * connectivity changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates
   * that the JoinDomain operation failed due to an authentication error. DETACHED: Indicates that
   * gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully joined a
   * domain. JOINING: Indicates that a JoinDomain operation is in progress. NETWORK_ERROR: Indicates
   * that JoinDomain operation failed due to
   */
  activeDirectoryStatus?: ActiveDirectoryStatus;
  /**
   * This value is true if a password for the guest user smbguest is set, otherwise false. Only
   * supported for S3 File Gateways. Valid Values: true | false
   */
  smbGuestPasswordSet?: boolean;
  /**
   * The type of security strategy that was specified for file gateway. ClientSpecified: If you
   * choose this option, requests are established based on what is negotiated by the client. This
   * option is recommended when you want to maximize compatibility across different clients in your
   * environment. Supported only for S3 File Gateway. MandatorySigning: If you choose this option,
   * File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing turned on.
   * This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later.
   * MandatoryEncryption: If you choose this
   */
  smbSecurityStrategy?: SmbSecurityStrategy;
  /** The shares on this gateway appear when listing shares. Only supported for S3 File Gateways. */
  fileSharesVisible?: boolean;
  smbLocalGroups?: SmbLocalGroups;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeSmbSettingsOutputSchema: Schema<DescribeSmbSettingsOutput> =
  s.object<DescribeSmbSettingsOutput>(
    {
      gatewayArn: s.optional(s.string()),
      domainName: s.optional(s.string()),
      activeDirectoryStatus: s.optional(s.lazy(() => activeDirectoryStatusSchema)),
      smbGuestPasswordSet: s.optional(s.boolean()),
      smbSecurityStrategy: s.optional(s.lazy(() => smbSecurityStrategySchema)),
      fileSharesVisible: s.optional(s.boolean()),
      smbLocalGroups: s.optional(s.lazy(() => smbLocalGroupsSchema)),
      _keysMap: {
        gatewayArn: "GatewayARN",
        domainName: "DomainName",
        activeDirectoryStatus: "ActiveDirectoryStatus",
        smbGuestPasswordSet: "SMBGuestPasswordSet",
        smbSecurityStrategy: "SMBSecurityStrategy",
        fileSharesVisible: "FileSharesVisible",
        smbLocalGroups: "SMBLocalGroups",
      },
    },
    { additionalProperties: s.json() },
  );
