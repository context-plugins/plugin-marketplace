using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ListMonitorEvaluationsResponse
{
    /// <summary>
    /// If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The monitoring results and predictor events collected by the monitor resource during different windows of time. For information about monitoring see Viewing Monitoring Results. For more information about retrieving monitoring results see Viewing Monitoring Results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorMonitorEvaluations")]
    public IReadOnlyList<PredictorMonitorEvaluation>? PredictorMonitorEvaluations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
