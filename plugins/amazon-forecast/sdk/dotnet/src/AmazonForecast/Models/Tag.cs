using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record Tag
{
    /// <summary>
    /// One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.
    /// </summary>
    [JsonPropertyName("Key")]
    public required string Key { get; init; }

    /// <summary>
    /// The optional part of a key-value pair that makes up a tag. A value acts as a descriptor within a tag category (key).
    /// </summary>
    [JsonPropertyName("Value")]
    public required string Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
