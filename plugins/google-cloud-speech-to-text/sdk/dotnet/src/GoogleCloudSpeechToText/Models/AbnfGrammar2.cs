using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of derivation rules. See specifications: https://www.w3.org/TR/speech-grammar
/// </summary>
public record AbnfGrammar2
{
    /// <summary>
    /// All declarations and rules of an ABNF grammar broken up into multiple strings that will end up concatenated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abnfStrings")]
    public IReadOnlyList<string>? AbnfStrings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
