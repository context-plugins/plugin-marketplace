using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for the Connectors Platform add-on.
/// </summary>
public record GoogleCloudApigeeV1ConnectorsPlatformConfig
{
    /// <summary>
    /// Flag that specifies whether the Connectors Platform add-on is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public string? ExpiresAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
