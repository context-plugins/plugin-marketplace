using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Paged with <c>from</c>/<c>size</c> — Candid's essentials shape, NOT the <c>page</c>/<c>limit</c> of /grants/*.
/// </summary>
public record EssentialsSearchResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    [JsonPropertyName("hits")]
    public required int Hits { get; init; }

    [JsonPropertyName("size")]
    public required int Size { get; init; }

    [JsonPropertyName("results_count")]
    public required int ResultsCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode? Mode { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<object> Results { get; init; }

    /// <summary>
    /// Zero-based offset of the first row returned.
    /// </summary>
    [JsonPropertyName("from")]
    public required int From { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
