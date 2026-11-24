using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteWhatIfAnalysisRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if analysis that you want to delete.
    /// </summary>
    [JsonPropertyName("WhatIfAnalysisArn")]
    public required string WhatIfAnalysisArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
