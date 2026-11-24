using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DeleteForecastRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the forecast to delete.
    /// </summary>
    [JsonPropertyName("ForecastArn")]
    public required string ForecastArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
