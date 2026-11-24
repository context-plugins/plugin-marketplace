using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ParameterRanges
{
    /// <summary>
    /// Specifies the tunable range for each categorical hyperparameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CategoricalParameterRanges")]
    public IReadOnlyList<CategoricalParameterRange>? CategoricalParameterRanges { get; init; }

    /// <summary>
    /// Specifies the tunable range for each continuous hyperparameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ContinuousParameterRanges")]
    public IReadOnlyList<ContinuousParameterRange>? ContinuousParameterRanges { get; init; }

    /// <summary>
    /// Specifies the tunable range for each integer hyperparameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IntegerParameterRanges")]
    public IReadOnlyList<IntegerParameterRange>? IntegerParameterRanges { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
