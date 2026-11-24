using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record NluImprovementSpecification
{
    /// <summary>
    /// Determines whether the Assisted NLU feature is enabled for the bot. When set to true, Amazon Lex uses advanced models to improve intent recognition and slot resolution, with the default being false.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    /// <summary>
    /// Specifies the mode for Assisted NLU operation. Use Primary to make Assisted NLU the primary intent recognition method, Fallback to use it only when standard NLU confidence is low, or DialogManager to use a large language model to manage the conversation, including intent recognition, slot elicitation, and confirmation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("assistedNluMode")]
    public AssistedNluMode? AssistedNluMode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentDisambiguationSettings")]
    public IntentDisambiguationSettings? IntentDisambiguationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
