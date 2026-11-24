using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Current stage of the IPO
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Open = new("open");

    public static readonly Status1 Closed = new("closed");

    public static readonly Status1 Listed = new("listed");

    public static readonly Status1 Upcoming = new("upcoming");

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
