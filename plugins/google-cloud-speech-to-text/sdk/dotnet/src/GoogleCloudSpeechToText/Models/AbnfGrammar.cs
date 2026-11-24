using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

public record AbnfGrammar
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
