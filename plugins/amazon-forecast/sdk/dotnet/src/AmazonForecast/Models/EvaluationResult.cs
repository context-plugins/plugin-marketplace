using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record EvaluationResult
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the algorithm that was evaluated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AlgorithmArn")]
    public string? AlgorithmArn { get; init; }

    /// <summary>
    /// The array of test windows used for evaluating the algorithm. The NumberOfBacktestWindows from the EvaluationParameters object determines the number of windows in the array.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TestWindows")]
    public IReadOnlyList<WindowSummary>? TestWindows { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
