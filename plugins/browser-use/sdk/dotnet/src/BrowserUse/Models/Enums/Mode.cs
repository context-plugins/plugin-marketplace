using System;
using System.Text.Json.Serialization;
using BrowserUse.Core.Enum;

namespace BrowserUse.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Mode>))]
public sealed record Mode : OpenStringEnum<Mode>
{
    private Mode(string value) : base(value)
    {
    }

    public static readonly Mode Queue = new("queue");

    public static readonly Mode Interrupt = new("interrupt");

    public TResult Match<TResult>(Func<TResult> onQueue, Func<TResult> onInterrupt, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queue => onQueue(),
            _ when this == Interrupt => onInterrupt(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueue, Action onInterrupt, Action<string> otherwise)
    {
        if (this == Queue) onQueue();
        else if (this == Interrupt) onInterrupt();
        else otherwise(Value);
    }
}
