using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State23>))]
public sealed record State23 : OpenStringEnum<State23>
{
    private State23(string value) : base(value)
    {
    }

    public static readonly State23 AwaitingSettlementTime = new("AWAITING_SETTLEMENT_TIME");

    public static readonly State23 Pending = new("PENDING");

    public static readonly State23 Released = new("RELEASED");

    public TResult Match<TResult>(Func<TResult> onAwaitingSettlementTime,
        Func<TResult> onPending,
        Func<TResult> onReleased,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AwaitingSettlementTime => onAwaitingSettlementTime(),
            _ when this == Pending => onPending(),
            _ when this == Released => onReleased(),
            _ => otherwise(Value)
        };

    public void Match(Action onAwaitingSettlementTime, Action onPending, Action onReleased, Action<string> otherwise)
    {
        if (this == AwaitingSettlementTime) onAwaitingSettlementTime();
        else if (this == Pending) onPending();
        else if (this == Released) onReleased();
        else otherwise(Value);
    }
}
