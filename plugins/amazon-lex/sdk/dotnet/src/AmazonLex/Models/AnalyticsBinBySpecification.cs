using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsBinBySpecification
{
    /// <summary>
    /// Specifies the time metric by which to bin the analytics data.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name Name { get; init; }

    /// <summary>
    /// Specifies the interval of time by which to bin the analytics data.
    /// </summary>
    [JsonPropertyName("interval")]
    public required Interval Interval { get; init; }

    /// <summary>
    /// Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the default order is by the key of the bin in descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public Order1? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
