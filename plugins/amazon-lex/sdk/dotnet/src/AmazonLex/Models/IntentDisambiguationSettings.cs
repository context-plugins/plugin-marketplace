using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record IntentDisambiguationSettings
{
    /// <summary>
    /// Determines whether the Intent Disambiguation feature is enabled. When set to true, Amazon Lex will present disambiguation options to users when multiple intents could match their input, with the default being false.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// Specifies the maximum number of intent options (2-5) to present to users when disambiguation is needed. This setting determines how many intent options will be shown to users when the system detects ambiguous input. The default value is 3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxDisambiguationIntents")]
    public int? MaxDisambiguationIntents { get; init; }

    /// <summary>
    /// Provides a custom message that will be displayed before presenting the disambiguation options to users. This message helps set the context for users and can be customized to match your bot's tone and brand. If not specified, a default message will be used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customDisambiguationMessage")]
    public string? CustomDisambiguationMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
