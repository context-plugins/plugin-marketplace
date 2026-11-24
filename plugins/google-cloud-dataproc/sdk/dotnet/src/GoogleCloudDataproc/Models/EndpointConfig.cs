using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Endpoint config for this cluster
/// </summary>
public record EndpointConfig
{
    /// <summary>
    /// Output only. The map of port descriptions to URLs. Will only be populated if enable_http_port_access is true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpPorts")]
    public IReadOnlyDictionary<string, string>? HttpPorts { get; init; }

    /// <summary>
    /// Optional. If true, enable http access to specific ports on the cluster from external sources. Defaults to false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enableHttpPortAccess")]
    public bool? EnableHttpPortAccess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
