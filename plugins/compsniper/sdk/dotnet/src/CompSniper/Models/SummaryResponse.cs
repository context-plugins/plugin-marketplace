using System.Text.Json.Serialization;
using CompSniper.Core.Models;

namespace CompSniper.Models;

public record SummaryResponse
{
    [JsonPropertyName("keyword")]
    public required string Keyword { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalResults")]
    public string? TotalResults { get; init; }

    [JsonPropertyName("totalItems")]
    public required int TotalItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawMedian")]
    public double? RawMedian { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rawSampleCount")]
    public int? RawSampleCount { get; init; }

    /// <summary>
    /// Deterministic price intelligence over the returned sold items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public PriceSummary? Summary { get; init; }

    [JsonPropertyName("cached")]
    public required bool Cached { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
