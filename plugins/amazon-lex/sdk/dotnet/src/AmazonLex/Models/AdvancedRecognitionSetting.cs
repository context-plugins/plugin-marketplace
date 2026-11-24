using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AdvancedRecognitionSetting
{
    /// <summary>
    /// Enables using the slot values as a custom vocabulary for recognizing user utterances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioRecognitionStrategy")]
    public AudioRecognitionStrategy? AudioRecognitionStrategy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
