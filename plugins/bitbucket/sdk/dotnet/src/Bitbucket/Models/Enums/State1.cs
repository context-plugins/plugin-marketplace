using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State1>))]
public sealed record State1 : OpenStringEnum<State1>
{
    private State1(string value) : base(value)
    {
    }

    public static readonly State1 Submitted = new("submitted");

    public static readonly State1 New = new("new");

    public static readonly State1 Open = new("open");

    public static readonly State1 Resolved = new("resolved");

    public static readonly State1 OnHold = new("on hold");

    public static readonly State1 Invalid = new("invalid");

    public static readonly State1 Duplicate = new("duplicate");

    public static readonly State1 Wontfix = new("wontfix");

    public static readonly State1 Closed = new("closed");

    public TResult Match<TResult>(Func<TResult> onSubmitted,
        Func<TResult> onNew,
        Func<TResult> onOpen,
        Func<TResult> onResolved,
        Func<TResult> onOnHold,
        Func<TResult> onInvalid,
        Func<TResult> onDuplicate,
        Func<TResult> onWontfix,
        Func<TResult> onClosed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Submitted => onSubmitted(),
            _ when this == New => onNew(),
            _ when this == Open => onOpen(),
            _ when this == Resolved => onResolved(),
            _ when this == OnHold => onOnHold(),
            _ when this == Invalid => onInvalid(),
            _ when this == Duplicate => onDuplicate(),
            _ when this == Wontfix => onWontfix(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onSubmitted,
        Action onNew,
        Action onOpen,
        Action onResolved,
        Action onOnHold,
        Action onInvalid,
        Action onDuplicate,
        Action onWontfix,
        Action onClosed,
        Action<string> otherwise)
    {
        if (this == Submitted) onSubmitted();
        else if (this == New) onNew();
        else if (this == Open) onOpen();
        else if (this == Resolved) onResolved();
        else if (this == OnHold) onOnHold();
        else if (this == Invalid) onInvalid();
        else if (this == Duplicate) onDuplicate();
        else if (this == Wontfix) onWontfix();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
