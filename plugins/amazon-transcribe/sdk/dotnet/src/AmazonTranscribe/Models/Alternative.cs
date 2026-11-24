using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record Alternative
{
    /// <summary>
    /// Contains transcribed text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Transcript")]
    public string? Transcript { get; init; }

    /// <summary>
    /// Contains words, phrases, or punctuation marks in your transcription output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Items")]
    public IReadOnlyList<Item>? Items { get; init; }

    /// <summary>
    /// Contains entities identified as personally identifiable information (PII) in your transcription output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Entities")]
    public IReadOnlyList<Entity>? Entities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
