using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

public record AccountEnvelope
{
    /// <summary>
    /// Authenticated account snapshot (§F1): plan, key env, credit balance and rate limit.
    /// </summary>
    [JsonPropertyName("data")]
    public required Account Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
