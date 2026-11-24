using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record TimeSeriesCondition
{
    /// <summary>
    /// The item_id, dimension name, IM name, or timestamp that you are modifying.
    /// </summary>
    [JsonPropertyName("AttributeName")]
    public required string AttributeName { get; init; }

    /// <summary>
    /// The value that is applied for the chosen Condition.
    /// </summary>
    [JsonPropertyName("AttributeValue")]
    public required string AttributeValue { get; init; }

    /// <summary>
    /// The condition to apply. Valid values are EQUALS, NOT_EQUALS, LESS_THAN and GREATER_THAN.
    /// </summary>
    [JsonPropertyName("Condition")]
    public required ConditionAmazonForecastServiceWhatIfForecastApi Condition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
