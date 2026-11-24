using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeForecastRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the forecast.
    /// </summary>
    [JsonPropertyName("ForecastArn")]
    public required string ForecastArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
