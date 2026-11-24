using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1TranslatorRequest
{
    /// <summary>
    /// The text to translate
    /// </summary>
    [JsonPropertyName("text")]
    public required string Text { get; init; }

    /// <summary>
    /// The language code to translate the text to (e.g., fr, es, de)
    /// </summary>
    [JsonPropertyName("target")]
    public required string Target { get; init; }

    /// <summary>
    /// The language code of the text to translate (e.g., en). If left blank, language will be auto-detected
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public string? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
