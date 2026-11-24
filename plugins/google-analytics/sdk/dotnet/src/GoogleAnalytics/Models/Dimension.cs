using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
/// </summary>
public record Dimension
{
    /// <summary>
    /// One dimension can be the result of an expression of multiple dimensions. For example, dimension "country, city": concatenate(country, ", ", city).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionExpression")]
    public DimensionExpression2? DimensionExpression { get; init; }

    /// <summary>
    /// The name of the dimension. See the <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions">API Dimensions</see> for the list of dimension names supported by core reporting methods such as <c>runReport</c> and <c>batchRunReports</c>. See <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions">Realtime Dimensions</see> for the list of dimension names supported by the <c>runRealtimeReport</c> method. See <see href="https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions">Funnel Dimensions</see> for the list of dimension names supported by the <c>runFunnelReport</c> method. If <c>dimensionExpression</c> is specified, <c>name</c> can be any string that you would like within the allowed character set. For example if a <c>dimensionExpression</c> concatenates <c>country</c> and <c>city</c>, you could call that dimension <c>countryAndCity</c>. Dimension names that you choose must match the regular expression <c>^[a-zA-Z0-9_]$</c>. Dimensions are referenced by <c>name</c> in <c>dimensionFilter</c>, <c>orderBys</c>, <c>dimensionExpression</c>, and <c>pivots</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
