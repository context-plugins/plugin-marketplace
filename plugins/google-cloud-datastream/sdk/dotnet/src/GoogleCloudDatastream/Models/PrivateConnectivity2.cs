using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Private connectivity.
/// </summary>
public record PrivateConnectivity2
{
    /// <summary>
    /// Required. A reference to a private connection resource. Format: <c>projects/{project}/locations/{location}/privateConnections/{name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privateConnection")]
    public string? PrivateConnection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
