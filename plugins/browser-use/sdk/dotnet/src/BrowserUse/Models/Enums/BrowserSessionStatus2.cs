using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

/// <summary>
/// Current status of the session (active/stopped)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BrowserSessionStatus2>))]
public sealed record BrowserSessionStatus2 : OpenStringEnum<BrowserSessionStatus2>
{
    private BrowserSessionStatus2(string value) : base(value)
    {
    }

    public static readonly BrowserSessionStatus2 Active = new("active");

    public static readonly BrowserSessionStatus2 Stopped = new("stopped");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onStopped, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onStopped, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
