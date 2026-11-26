using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

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
