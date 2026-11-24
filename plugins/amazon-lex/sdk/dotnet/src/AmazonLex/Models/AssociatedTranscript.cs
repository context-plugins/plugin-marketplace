using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AssociatedTranscript
{
    /// <summary>
    /// The content of the transcript that meets the search filter criteria. For the JSON format of the transcript, see Output transcript format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transcript")]
    public string? Transcript { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
