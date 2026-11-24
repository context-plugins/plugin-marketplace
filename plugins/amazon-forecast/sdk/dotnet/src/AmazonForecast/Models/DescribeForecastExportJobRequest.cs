using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribeForecastExportJobRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the forecast export job.
    /// </summary>
    [JsonPropertyName("ForecastExportJobArn")]
    public required string ForecastExportJobArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
