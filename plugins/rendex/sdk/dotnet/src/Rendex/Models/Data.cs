using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Models.Enums;

namespace Rendex.Models;

public record Data
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("plan")]
    public Plan? Plan { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public Usage? Usage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rateLimitPerMinute")]
    public int? RateLimitPerMinute { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgrade")]
    public Upgrade? Upgrade { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
