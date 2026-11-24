using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record RadarCollection
{
    [JsonPropertyName("status")]
    public required Status Status { get; init; }

    [JsonPropertyName("reasons")]
    public required IReadOnlyList<string> Reasons { get; init; }

    [JsonPropertyName("required_channels")]
    public required IReadOnlyList<string> RequiredChannels { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
