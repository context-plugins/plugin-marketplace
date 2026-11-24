using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record JoinDomainOutputAwsStorageGatewayOperationsApi
{
    /// <summary>
    /// The unique Amazon Resource Name (ARN) of the gateway that joined the domain.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// Indicates the status of the gateway as a member of the Active Directory domain. This field is only used as part of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error. DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. INSUFFICIENT_PERMISSIONS: Indicates that the JoinDomain operation f
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveDirectoryStatus")]
    public ActiveDirectoryStatusAwsStorageGatewayOperationsApi? ActiveDirectoryStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
