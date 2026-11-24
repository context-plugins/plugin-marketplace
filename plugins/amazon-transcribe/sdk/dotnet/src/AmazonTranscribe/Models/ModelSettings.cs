using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record ModelSettings
{
    /// <summary>
    /// The name of the custom language model you want to use when processing your transcription job. Note that custom language model names are case sensitive. The language of the specified custom language model must match the language code that you specify in your transcription request. If the languages do not match, the custom language model isn't applied. There are no errors or warnings associated with a language mismatch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageModelName")]
    public string? LanguageModelName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
