using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record HyperParameterTuningJobConfig
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParameterRanges")]
    public ParameterRanges? ParameterRanges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
