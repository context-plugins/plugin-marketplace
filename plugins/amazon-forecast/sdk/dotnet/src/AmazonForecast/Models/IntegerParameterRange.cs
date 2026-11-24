using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record IntegerParameterRange
{
    /// <summary>
    /// The name of the hyperparameter to tune.
    /// </summary>
    [JsonPropertyName("Name")]
    public required string Name { get; init; }

    /// <summary>
    /// The maximum tunable value of the hyperparameter.
    /// </summary>
    [JsonPropertyName("MaxValue")]
    public required int MaxValue { get; init; }

    /// <summary>
    /// The minimum tunable value of the hyperparameter.
    /// </summary>
    [JsonPropertyName("MinValue")]
    public required int MinValue { get; init; }

    /// <summary>
    /// The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values: Auto Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter. Linear Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale. Logarithmic Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale. Logarithmic scaling works only for ranges that have values greater than 0. ReverseLogarithmic Not supported for IntegerParameterRange. Reverse logarithmic scaling works only for ranges that are entirely w
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ScalingType")]
    public ScalingType1? ScalingType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
