using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeWhatIfForecastRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the what-if forecast that you are interested in.
    /// </summary>
    [JsonPropertyName("WhatIfForecastArn")]
    public required string WhatIfForecastArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
