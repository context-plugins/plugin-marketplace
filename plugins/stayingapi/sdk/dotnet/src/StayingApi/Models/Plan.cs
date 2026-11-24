using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Plan
{
    /// <summary>
    /// Plan code (free|starter|pro|scale|enterprise).
    /// </summary>
    [JsonPropertyName("code")]
    public required string Code { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Subscription status.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
