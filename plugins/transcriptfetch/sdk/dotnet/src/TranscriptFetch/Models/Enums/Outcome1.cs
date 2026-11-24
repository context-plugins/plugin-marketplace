using System;
using System.Text.Json.Serialization;
using TranscriptFetch.Core.Enum;

namespace TranscriptFetch.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Outcome1>))]
public sealed record Outcome1 : OpenStringEnum<Outcome1>
{
    private Outcome1(string value) : base(value)
    {
    }

    public static readonly Outcome1 Ok = new("ok");

    public static readonly Outcome1 Processing = new("processing");

    public static readonly Outcome1 Error = new("error");

    public TResult Match<TResult>(Func<TResult> onOk,
        Func<TResult> onProcessing,
        Func<TResult> onError,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ok => onOk(),
            _ when this == Processing => onProcessing(),
            _ when this == Error => onError(),
            _ => otherwise(Value)
        };

    public void Match(Action onOk, Action onProcessing, Action onError, Action<string> otherwise)
    {
        if (this == Ok) onOk();
        else if (this == Processing) onProcessing();
        else if (this == Error) onError();
        else otherwise(Value);
    }
}
