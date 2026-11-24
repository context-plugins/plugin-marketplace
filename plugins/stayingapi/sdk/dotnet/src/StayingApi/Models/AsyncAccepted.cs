using System.Text.Json.Serialization;
using StayingApi.Core.Models;

namespace StayingApi.Models;

/// <summary>
/// Returned (202) when projected runtime exceeds the 8s async threshold. Poll pollUrl until terminal. A Retry-After header hints the back-off.
/// </summary>
public record AsyncAccepted
{
    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    [JsonPropertyName("meta")]
    public required Meta1 Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
