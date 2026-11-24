using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record CreateWhatIfAnalysisResponse
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if analysis.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WhatIfAnalysisArn")]
    public string? WhatIfAnalysisArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
