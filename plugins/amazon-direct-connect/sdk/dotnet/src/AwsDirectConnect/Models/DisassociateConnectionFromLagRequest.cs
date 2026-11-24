using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DisassociateConnectionFromLagRequest
{
    /// <summary>
    /// The ID of the connection.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The ID of the LAG.
    /// </summary>
    [JsonPropertyName("lagId")]
    public required string LagId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
