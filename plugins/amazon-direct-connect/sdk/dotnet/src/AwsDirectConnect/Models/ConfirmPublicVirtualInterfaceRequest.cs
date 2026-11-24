using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record ConfirmPublicVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the virtual interface.
    /// </summary>
    [JsonPropertyName("virtualInterfaceId")]
    public required string VirtualInterfaceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
