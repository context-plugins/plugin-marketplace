using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;
using AmazonForecast.Models.Enums;

namespace AmazonForecast.Models;

public record Filter
{
    /// <summary>
    /// The name of the parameter to filter on.
    /// </summary>
    [JsonPropertyName("Key")]
    public required string Key { get; init; }

    /// <summary>
    /// The value to match.
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    /// <summary>
    /// The condition to apply. To include the objects that match the statement, specify IS. To exclude matching objects, specify IS_NOT.
    /// </summary>
    [JsonPropertyName("Condition")]
    public required Condition Condition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
