using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record TimeSeriesTransformation
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Action")]
    public ActionModel? Action { get; init; }

    /// <summary>
    /// An array of conditions that define which members of the related time series are transformed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TimeSeriesConditions")]
    public IReadOnlyList<TimeSeriesCondition>? TimeSeriesConditions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
