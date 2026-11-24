using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Core.Validation.Attributes;

namespace Fellow.Models;

/// <summary>
/// Configuration for media_url expiration.
/// </summary>
public record MediaUrlConfig
{
    /// <summary>
    /// Optional expiration time in seconds (1h-24h). Defaults to 12h if not specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expire_in")]
    [Minimum(3600)]
    [Maximum(86400)]
    public int? ExpireIn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
