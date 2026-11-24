using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateWhatIfAnalysisRequest
{
    /// <summary>
    /// The name of the what-if analysis. Each name must be unique.
    /// </summary>
    [JsonPropertyName("WhatIfAnalysisName")]
    public required string WhatIfAnalysisName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the baseline forecast.
    /// </summary>
    [JsonPropertyName("ForecastArn")]
    public required string ForecastArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeSeriesSelector")]
    public TimeSeriesSelector? TimeSeriesSelector { get; init; }

    /// <summary>
    /// A list of tags to apply to the what if forecast.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
