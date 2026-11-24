using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record DescribeSmbSettingsOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// The name of the domain that the gateway is joined to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DomainName")]
    public string? DomainName { get; init; }

    /// <summary>
    /// Indicates the status of a gateway that is a member of the Active Directory domain. This field is only used as part of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. NETWORK_ERROR: Indicates that JoinDomain operation failed due to
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveDirectoryStatus")]
    public ActiveDirectoryStatus? ActiveDirectoryStatus { get; init; }

    /// <summary>
    /// This value is true if a password for the guest user smbguest is set, otherwise false. Only supported for S3 File Gateways. Valid Values: true | false
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SMBGuestPasswordSet")]
    public bool? SmbGuestPasswordSet { get; init; }

    /// <summary>
    /// The type of security strategy that was specified for file gateway. ClientSpecified: If you choose this option, requests are established based on what is negotiated by the client. This option is recommended when you want to maximize compatibility across different clients in your environment. Supported only for S3 File Gateway. MandatorySigning: If you choose this option, File Gateway only allows connections from SMBv2 or SMBv3 clients that have signing turned on. This option works with SMB clients on Microsoft Windows Vista, Windows Server 2008, or later. MandatoryEncryption: If you choose this
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SMBSecurityStrategy")]
    public SmbSecurityStrategy? SmbSecurityStrategy { get; init; }

    /// <summary>
    /// The shares on this gateway appear when listing shares. Only supported for S3 File Gateways.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileSharesVisible")]
    public bool? FileSharesVisible { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SMBLocalGroups")]
    public SmbLocalGroups? SmbLocalGroups { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
