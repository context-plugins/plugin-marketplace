using System.Collections.Generic;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Meta2
{
    [JsonPropertyName("requestId")]
    public required string RequestId { get; init; }

    /// <summary>
    /// Polling and in-progress/failed states never bill.
    /// </summary>
    [JsonPropertyName("creditsCharged")]
    public int CreditsCharged { get; } = 0;

    [JsonPropertyName("platforms")]
    public required IReadOnlyList<Platform> Platforms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
