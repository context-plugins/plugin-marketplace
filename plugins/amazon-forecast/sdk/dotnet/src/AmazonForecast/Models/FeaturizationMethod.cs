using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record FeaturizationMethod
{
    /// <summary>
    /// The name of the method. The "filling" method is the only supported method.
    /// </summary>
    [JsonPropertyName("FeaturizationMethodName")]
    public string FeaturizationMethodName { get; } = "filling";

    /// <summary>
    /// The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to override the default values. Related Time Series attributes do not accept aggregation parameters. The following list shows the parameters and their valid values for the "filling" featurization method for a Target Time Series dataset. Bold signifies the default value. aggregation: sum, avg, first, min, max frontfill: none middlefill: zero, nan (not a number), value, median, mean, min, max backfill: zero, nan, value, median, mean, min, max The following list shows the parameters and their
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FeaturizationMethodParameters")]
    public IReadOnlyDictionary<string, string>? FeaturizationMethodParameters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
