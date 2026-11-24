using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeWhatIfForecastExportRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in.
    /// </summary>
    [JsonPropertyName("WhatIfForecastExportArn")]
    public required string WhatIfForecastExportArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
