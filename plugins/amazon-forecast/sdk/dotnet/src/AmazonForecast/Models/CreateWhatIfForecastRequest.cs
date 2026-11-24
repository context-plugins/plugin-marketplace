using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateWhatIfForecastRequest
{
    /// <summary>
    /// The name of the what-if forecast. Names must be unique within each what-if analysis.
    /// </summary>
    [JsonPropertyName("WhatIfForecastName")]
    public required string WhatIfForecastName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if analysis.
    /// </summary>
    [JsonPropertyName("WhatIfAnalysisArn")]
    public required string WhatIfAnalysisArn { get; init; }

    /// <summary>
    /// The transformations that are applied to the baseline time series. Each transformation contains an action and a set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action is applied to all items.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeSeriesTransformations")]
    public IReadOnlyList<TimeSeriesTransformation>? TimeSeriesTransformations { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeSeriesReplacementsDataSource")]
    public TimeSeriesReplacementsDataSource? TimeSeriesReplacementsDataSource { get; init; }

    /// <summary>
    /// A list of tags to apply to the what if forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
