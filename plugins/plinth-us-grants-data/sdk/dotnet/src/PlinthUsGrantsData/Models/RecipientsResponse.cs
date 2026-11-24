using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record RecipientsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    /// <summary>
    /// Total matching rows, not the number returned.
    /// </summary>
    [JsonPropertyName("hits")]
    public required int Hits { get; init; }

    [JsonPropertyName("page")]
    public required int Page { get; init; }

    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// Rows in THIS response.
    /// </summary>
    [JsonPropertyName("results_count")]
    public required int ResultsCount { get; init; }

    [JsonPropertyName("total_pages")]
    public required int TotalPages { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<RecipientAggregate> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
