using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ListWhatIfAnalysesResponse
{
    /// <summary>
    /// An array of WhatIfAnalysisSummary objects that describe the matched analyses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfAnalyses")]
    public IReadOnlyList<WhatIfAnalysisSummary>? WhatIfAnalyses { get; init; }

    /// <summary>
    /// If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
