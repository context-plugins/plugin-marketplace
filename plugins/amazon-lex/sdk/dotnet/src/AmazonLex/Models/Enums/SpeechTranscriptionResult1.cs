using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// The speech transcription success or failure of the test result evaluation item.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpeechTranscriptionResult1>))]
public sealed record SpeechTranscriptionResult1 : OpenStringEnum<SpeechTranscriptionResult1>
{
    private SpeechTranscriptionResult1(string value) : base(value)
    {
    }

    public static readonly SpeechTranscriptionResult1 Matched = new("Matched");

    public static readonly SpeechTranscriptionResult1 Mismatched = new("Mismatched");

    public static readonly SpeechTranscriptionResult1 ExecutionError = new("ExecutionError");

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
