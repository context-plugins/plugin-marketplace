using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Models;

namespace AmazonDevOpsGuru.Models;

public record ListOrganizationInsightsResponse
{
    /// <summary>
    /// An integer that specifies the number of open proactive insights in your Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ProactiveInsights")]
    public IReadOnlyList<ProactiveOrganizationInsightSummary>? ProactiveInsights { get; init; }

    /// <summary>
    /// An integer that specifies the number of open reactive insights in your Amazon Web Services account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReactiveInsights")]
    public IReadOnlyList<ReactiveOrganizationInsightSummary>? ReactiveInsights { get; init; }

    /// <summary>
    /// The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
