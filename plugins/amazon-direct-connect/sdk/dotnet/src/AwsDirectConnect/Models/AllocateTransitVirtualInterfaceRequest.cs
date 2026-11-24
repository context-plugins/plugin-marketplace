using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AllocateTransitVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the connection on which the transit virtual interface is provisioned.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the transit virtual interface.
    /// </summary>
    [JsonPropertyName("ownerAccount")]
    public required string OwnerAccount { get; init; }

    [JsonPropertyName("newTransitVirtualInterfaceAllocation")]
    public required NewTransitVirtualInterfaceAllocation NewTransitVirtualInterfaceAllocation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
