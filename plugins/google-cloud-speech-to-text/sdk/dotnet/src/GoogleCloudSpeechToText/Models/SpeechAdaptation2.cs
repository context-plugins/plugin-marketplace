using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudSpeechToText.Core.Models;

namespace GoogleCloudSpeechToText.Models;

/// <summary>
/// Speech adaptation configuration improves the accuracy of speech recognition. For more information, see the <see href="https://cloud.google.com/speech-to-text/docs/adaptation">speech adaptation</see> documentation. When speech adaptation is set it supersedes the <c>speech_contexts</c> field.
/// </summary>
public record SpeechAdaptation2
{
    /// <summary>
    /// Augmented Backus-Naur form (ABNF) is a standardized grammar notation comprised by a set of derivation rules. See specifications: https://www.w3.org/TR/speech-grammar
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abnfGrammar")]
    public AbnfGrammar2? AbnfGrammar { get; init; }

    /// <summary>
    /// A collection of phrase set resource names to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phraseSetReferences")]
    public IReadOnlyList<string>? PhraseSetReferences { get; init; }

    /// <summary>
    /// A collection of custom classes. To specify the classes inline, leave the class' <c>name</c> blank and fill in the rest of its fields, giving it a unique <c>custom_class_id</c>. Refer to the inline defined class in phrase hints by its <c>custom_class_id</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customClasses")]
    public IReadOnlyList<CustomClass>? CustomClasses { get; init; }

    /// <summary>
    /// A collection of phrase sets. To specify the hints inline, leave the phrase set's <c>name</c> blank and fill in the rest of its fields. Any phrase set can use any custom class.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phraseSets")]
    public IReadOnlyList<PhraseSet>? PhraseSets { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
