using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record PredictorExecutionDetails
{
    /// <summary>
    /// An array of the backtests performed to evaluate the accuracy of the predictor against a particular algorithm. The NumberOfBacktestWindows from the object determines the number of windows in the array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PredictorExecutions")]
    public IReadOnlyList<PredictorExecution>? PredictorExecutions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
