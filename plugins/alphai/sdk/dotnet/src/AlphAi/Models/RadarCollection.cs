using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

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
