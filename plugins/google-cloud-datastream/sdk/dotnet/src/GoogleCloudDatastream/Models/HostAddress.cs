using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// A HostAddress represents a transport end point, which is the combination of an IP address or hostname and a port number.
/// </summary>
public record HostAddress
{
    /// <summary>
    /// Required. Hostname for the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// Optional. Port for the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
