using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record PredictorExecution
{
    /// <summary>
    /// The ARN of the algorithm used to test the predictor.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AlgorithmArn")]
    public string? AlgorithmArn { get; init; }

    /// <summary>
    /// An array of test windows used to evaluate the algorithm. The NumberOfBacktestWindows from the object determines the number of windows in the array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestWindows")]
    public IReadOnlyList<TestWindowSummary>? TestWindows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
