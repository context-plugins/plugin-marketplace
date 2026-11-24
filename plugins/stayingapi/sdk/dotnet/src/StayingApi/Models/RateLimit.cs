using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation.Attributes;

namespace StayingApi.Models;

public record RateLimit
{
    /// <summary>
    /// Per-plan rate limit (requests/minute).
    /// </summary>
    [JsonPropertyName("requestsPerMinute")]
    [Minimum(1)]
    public required int RequestsPerMinute { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
