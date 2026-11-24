using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record RateLimits
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("daily")]
    public RateLimitTier? Daily { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hourly")]
    public RateLimitTier? Hourly { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minute")]
    public RateLimitTier? Minute { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
