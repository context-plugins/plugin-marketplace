using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1WordsearchRequest
{
    /// <summary>
    /// Array of words to hide in the puzzle (3-20 words)
    /// </summary>
    [JsonPropertyName("words")]
    public required string Words { get; init; }

    /// <summary>
    /// Grid size
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    public int? Size { get; init; }

    /// <summary>
    /// Difficulty level (affects word directions)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("difficulty")]
    public string? Difficulty { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable puzzle image
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public bool? Image { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable solution image
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("solutionImage")]
    public bool? SolutionImage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
