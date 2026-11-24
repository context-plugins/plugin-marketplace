using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record CreateTransitVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the connection.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    [JsonPropertyName("newTransitVirtualInterface")]
    public required NewTransitVirtualInterface NewTransitVirtualInterface { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
