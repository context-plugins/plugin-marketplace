using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record AssociateHostedConnectionRequest
{
    /// <summary>
    /// The ID of the hosted connection.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The ID of the interconnect or the LAG.
    /// </summary>
    [JsonPropertyName("parentConnectionId")]
    public required string ParentConnectionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
