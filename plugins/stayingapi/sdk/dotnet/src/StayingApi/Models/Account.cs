using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

/// <summary>
/// Authenticated account snapshot (§F1): plan, key env, credit balance and rate limit.
/// </summary>
public record Account
{
    [JsonPropertyName("plan")]
    public required Plan Plan { get; init; }

    [JsonPropertyName("key")]
    public required Key Key { get; init; }

    [JsonPropertyName("credits")]
    public required Credits Credits { get; init; }

    [JsonPropertyName("rateLimit")]
    public required RateLimit RateLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
