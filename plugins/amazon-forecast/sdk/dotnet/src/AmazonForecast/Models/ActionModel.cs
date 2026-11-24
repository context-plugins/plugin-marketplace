using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record ActionModel
{
    /// <summary>
    /// The related time series that you are modifying. This value is case insensitive.
    /// </summary>
    [JsonPropertyName("AttributeName")]
    public required string AttributeName { get; init; }

    /// <summary>
    /// The operation that is applied to the provided attribute. Operations include: ADD - adds Value to all rows of AttributeName. SUBTRACT - subtracts Value from all rows of AttributeName. MULTIPLY - multiplies all rows of AttributeName by Value. DIVIDE - divides all rows of AttributeName by Value.
    /// </summary>
    [JsonPropertyName("Operation")]
    public required Operation Operation { get; init; }

    /// <summary>
    /// The value that is applied for the chosen Operation.
    /// </summary>
    [JsonPropertyName("Value")]
    public required double Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
