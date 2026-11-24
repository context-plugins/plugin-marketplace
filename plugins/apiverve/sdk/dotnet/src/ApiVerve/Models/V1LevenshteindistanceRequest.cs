using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1LevenshteindistanceRequest
{
    /// <summary>
    /// First string to compare (max 10,000 characters)
    /// </summary>
    [JsonPropertyName("string1")]
    public required string String1 { get; init; }

    /// <summary>
    /// Second string to compare (max 10,000 characters)
    /// </summary>
    [JsonPropertyName("string2")]
    public required string String2 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
