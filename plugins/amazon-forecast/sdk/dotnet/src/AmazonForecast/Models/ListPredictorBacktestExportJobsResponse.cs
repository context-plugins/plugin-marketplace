using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ListPredictorBacktestExportJobsResponse
{
    /// <summary>
    /// An array of objects that summarize the properties of each predictor backtest export job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorBacktestExportJobs")]
    public IReadOnlyList<PredictorBacktestExportJobSummary>? PredictorBacktestExportJobs { get; init; }

    /// <summary>
    /// Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
