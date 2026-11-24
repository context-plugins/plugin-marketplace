using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record CreatePrivateVirtualInterfaceRequest
{
    /// <summary>
    /// The ID of the connection.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    [JsonPropertyName("newPrivateVirtualInterface")]
    public required NewPrivateVirtualInterface NewPrivateVirtualInterface { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
