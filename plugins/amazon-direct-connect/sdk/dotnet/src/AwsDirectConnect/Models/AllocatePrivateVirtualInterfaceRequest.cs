using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AllocatePrivateVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the connection on which the private virtual interface is provisioned.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the virtual private interface.
    /// </summary>
    [JsonPropertyName("ownerAccount")]
    public required string OwnerAccount { get; init; }

    [JsonPropertyName("newPrivateVirtualInterfaceAllocation")]
    public required NewPrivateVirtualInterfaceAllocation NewPrivateVirtualInterfaceAllocation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
