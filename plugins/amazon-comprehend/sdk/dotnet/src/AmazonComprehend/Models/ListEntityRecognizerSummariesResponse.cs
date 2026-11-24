using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record ListEntityRecognizerSummariesResponse
{
    /// <summary>
    /// The list entity recognizer summaries.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntityRecognizerSummariesList")]
    public IReadOnlyList<EntityRecognizerSummary>? EntityRecognizerSummariesList { get; init; }

    /// <summary>
    /// Identifies the next page of results to return.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
