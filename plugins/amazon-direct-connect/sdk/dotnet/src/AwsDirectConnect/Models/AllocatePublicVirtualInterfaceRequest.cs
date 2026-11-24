using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AllocatePublicVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the connection on which the public virtual interface is provisioned.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the public virtual interface.
    /// </summary>
    [JsonPropertyName("ownerAccount")]
    public required string OwnerAccount { get; init; }

    [JsonPropertyName("newPublicVirtualInterfaceAllocation")]
    public required NewPublicVirtualInterfaceAllocation NewPublicVirtualInterfaceAllocation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
