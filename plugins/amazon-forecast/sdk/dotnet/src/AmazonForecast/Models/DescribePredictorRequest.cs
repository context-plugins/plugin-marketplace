using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record DescribePredictorRequest
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the predictor that you want information about.
    /// </summary>
    [JsonPropertyName("PredictorArn")]
    public required string PredictorArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
