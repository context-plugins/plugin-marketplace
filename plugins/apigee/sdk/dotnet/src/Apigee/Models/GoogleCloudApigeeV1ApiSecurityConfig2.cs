using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Configuration for the API Security add-on.
/// </summary>
public record GoogleCloudApigeeV1ApiSecurityConfig2
{
    /// <summary>
    /// Output only. Time at which the API Security add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public string? ExpiresAt { get; init; }

    /// <summary>
    /// Flag that specifies whether the API security add-on is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
