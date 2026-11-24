using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record CharacterOffsets
{
    /// <summary>
    /// Provides the character count of the first character where a match is identified. For example, the first character associated with an issue or a category match in a segment transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Begin")]
    public int? Begin { get; init; }

    /// <summary>
    /// Provides the character count of the last character where a match is identified. For example, the last character associated with an issue or a category match in a segment transcript.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("End")]
    public int? End { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
