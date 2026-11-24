using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record CoverageChannel
{
    [JsonPropertyName("channel")]
    public required Channel Channel { get; init; }

    [JsonPropertyName("cadence")]
    public required string Cadence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_ingested_at")]
    public DateTimeOffset? LastIngestedAt { get; init; }

    [JsonPropertyName("stale_after_seconds")]
    public required int StaleAfterSeconds { get; init; }

    [JsonPropertyName("stale")]
    public required bool Stale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
