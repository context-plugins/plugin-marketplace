using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Enables using the slot values as a custom vocabulary for recognizing user utterances.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AudioRecognitionStrategy>))]
public sealed record AudioRecognitionStrategy : OpenStringEnum<AudioRecognitionStrategy>
{
    private AudioRecognitionStrategy(string value) : base(value)
    {
    }

    public static readonly AudioRecognitionStrategy UseSlotValuesAsCustomVocabulary = new(
        "UseSlotValuesAsCustomVocabulary");

    public TResult Match<TResult>(Func<TResult> onUseSlotValuesAsCustomVocabulary, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == UseSlotValuesAsCustomVocabulary => onUseSlotValuesAsCustomVocabulary(),
            _ => otherwise(Value)
        };

    public void Match(Action onUseSlotValuesAsCustomVocabulary, Action<string> otherwise)
    {
        if (this == UseSlotValuesAsCustomVocabulary) onUseSlotValuesAsCustomVocabulary();
        else otherwise(Value);
    }
}
