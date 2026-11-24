using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ListForecastsResponse
{
    /// <summary>
    /// An array of objects that summarize each forecast's properties.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Forecasts")]
    public IReadOnlyList<ForecastSummary>? Forecasts { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
