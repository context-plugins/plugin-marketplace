using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status9>))]
public sealed record Status9 : OpenStringEnum<Status9>
{
    private Status9(string value) : base(value)
    {
    }

    public static readonly Status9 Open = new("open");

    public static readonly Status9 Closed = new("closed");

    public static readonly Status9 Listed = new("listed");

    public static readonly Status9 Upcoming = new("upcoming");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onClosed,
        Func<TResult> onListed,
        Func<TResult> onUpcoming,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Closed => onClosed(),
            _ when this == Listed => onListed(),
            _ when this == Upcoming => onUpcoming(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onClosed, Action onListed, Action onUpcoming, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Closed) onClosed();
        else if (this == Listed) onListed();
        else if (this == Upcoming) onUpcoming();
        else otherwise(Value);
    }
}
