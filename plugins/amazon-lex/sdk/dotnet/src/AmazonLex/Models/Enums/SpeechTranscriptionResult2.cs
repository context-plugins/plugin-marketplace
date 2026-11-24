using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether the expected and actual speech transcriptions match or not, or if there is an error in execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeechTranscriptionResult2>))]
public sealed record SpeechTranscriptionResult2 : OpenStringEnum<SpeechTranscriptionResult2>
{
    private SpeechTranscriptionResult2(string value) : base(value)
    {
    }

    public static readonly SpeechTranscriptionResult2 Matched = new("Matched");

    public static readonly SpeechTranscriptionResult2 Mismatched = new("Mismatched");

    public static readonly SpeechTranscriptionResult2 ExecutionError = new("ExecutionError");

    public TResult Match<TResult>(Func<TResult> onMatched,
        Func<TResult> onMismatched,
        Func<TResult> onExecutionError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Matched => onMatched(),
            _ when this == Mismatched => onMismatched(),
            _ when this == ExecutionError => onExecutionError(),
            _ => otherwise(Value)
        };

    public void Match(Action onMatched, Action onMismatched, Action onExecutionError, Action<string> otherwise)
    {
        if (this == Matched) onMatched();
        else if (this == Mismatched) onMismatched();
        else if (this == ExecutionError) onExecutionError();
        else otherwise(Value);
    }
}
