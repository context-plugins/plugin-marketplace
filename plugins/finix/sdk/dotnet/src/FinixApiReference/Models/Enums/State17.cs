using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The state of the <c>Compliance Form</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State17>))]
public sealed record State17 : OpenStringEnum<State17>
{
    private State17(string value) : base(value)
    {
    }

    public static readonly State17 Incomplete = new("INCOMPLETE");

    public static readonly State17 Overdue = new("OVERDUE");

    public static readonly State17 Complete = new("COMPLETE");

    public static readonly State17 Expired = new("EXPIRED");

    public static readonly State17 Invalid = new("INVALID");

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
