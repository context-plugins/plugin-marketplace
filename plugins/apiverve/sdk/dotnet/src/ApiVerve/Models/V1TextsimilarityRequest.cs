using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1TextsimilarityRequest
{
    /// <summary>
    /// The first text to compare. Must be less than 1000 characters
    /// </summary>
    [JsonPropertyName("text1")]
    public required string Text1 { get; init; }

    /// <summary>
    /// The second text to compare. Must be less than 1000 characters
    /// </summary>
    [JsonPropertyName("text2")]
    public required string Text2 { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
