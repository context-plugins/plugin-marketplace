using System;
using System.Text.Json.Serialization;
using BrowserStack.Core.Enum;

namespace BrowserStack.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Done = new("done");

    public static readonly Status Running = new("running");

    public static readonly Status Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onDone,
        Func<TResult> onRunning,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Done => onDone(),
            _ when this == Running => onRunning(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onDone, Action onRunning, Action onFailed, Action<string> otherwise)
    {
        if (this == Done) onDone();
        else if (this == Running) onRunning();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
