using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Outcome>))]
public sealed record Outcome : OpenStringEnum<Outcome>
{
    private Outcome(string value) : base(value)
    {
    }

    public static readonly Outcome Ok = new("ok");

    public static readonly Outcome NoTranscript = new("no_transcript");

    public static readonly Outcome Processing = new("processing");

    public static readonly Outcome Error = new("error");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onNoTranscript,
        Func<TResult> onProcessing,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == NoTranscript => onNoTranscript(),
            _ when this == Processing => onProcessing(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onNoTranscript, Action onProcessing, Action onError, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == NoTranscript) onNoTranscript();
        else if (this == Processing) onProcessing();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
