using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record RadarClusterFiling
{
    [JsonPropertyName("accession_number")]
    public required string AccessionNumber { get; init; }

    [JsonPropertyName("filed_at")]
    public required DateTimeOffset FiledAt { get; init; }

    [JsonPropertyName("sec_url")]
    public required string SecUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
