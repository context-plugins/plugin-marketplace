using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record BatchResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    [JsonPropertyName("results_count")]
    public required int ResultsCount { get; init; }

    /// <summary>
    /// Calls this request cost: one per 50 rows.
    /// </summary>
    [JsonPropertyName("calls_charged")]
    public required int CallsCharged { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<BatchResult> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
