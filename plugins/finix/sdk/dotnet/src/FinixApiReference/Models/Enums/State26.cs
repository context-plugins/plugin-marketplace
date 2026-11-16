using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State26>))]
public sealed record State26 : OpenStringEnum<State26>
{
    private State26(string value) : base(value)
    {
    }

    public static readonly State26 Incomplete = new("INCOMPLETE");

    public static readonly State26 Overdue = new("OVERDUE");

    public static readonly State26 Complete = new("COMPLETE");

    public static readonly State26 Expired = new("EXPIRED");

    public static readonly State26 Invalid = new("INVALID");

    public TResult Match<TResult>(Func<TResult> onIncomplete,
        Func<TResult> onOverdue,
        Func<TResult> onComplete,
        Func<TResult> onExpired,
        Func<TResult> onInvalid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Incomplete => onIncomplete(),
            _ when this == Overdue => onOverdue(),
            _ when this == Complete => onComplete(),
            _ when this == Expired => onExpired(),
            _ when this == Invalid => onInvalid(),
            _ => otherwise(Value)
        };

    public void Match(Action onIncomplete,
        Action onOverdue,
        Action onComplete,
        Action onExpired,
        Action onInvalid,
        Action<string> otherwise)
    {
        if (this == Incomplete) onIncomplete();
        else if (this == Overdue) onOverdue();
        else if (this == Complete) onComplete();
        else if (this == Expired) onExpired();
        else if (this == Invalid) onInvalid();
        else otherwise(Value);
    }
}
