using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record SyntaxToken
{
    /// <summary>
    /// A unique identifier for a token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TokenId")]
    public int? TokenId { get; init; }

    /// <summary>
    /// The word that was recognized in the source text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Text")]
    public string? Text { get; init; }

    /// <summary>
    /// The zero-based offset from the beginning of the source text to the first character in the word.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffset")]
    public int? BeginOffset { get; init; }

    /// <summary>
    /// The zero-based offset from the beginning of the source text to the last character in the word.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffset")]
    public int? EndOffset { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("PartOfSpeech")]
    public PartOfSpeechTag? PartOfSpeech { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
