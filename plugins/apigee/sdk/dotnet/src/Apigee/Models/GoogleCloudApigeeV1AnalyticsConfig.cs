using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Configuration for the Analytics add-on.
/// </summary>
public record GoogleCloudApigeeV1AnalyticsConfig
{
    /// <summary>
    /// Output only. The latest update time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Output only. The state of the Analytics add-on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State3? State { get; init; }

    /// <summary>
    /// Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expireTimeMillis")]
    public string? ExpireTimeMillis { get; init; }

    /// <summary>
    /// Whether the Analytics add-on is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
