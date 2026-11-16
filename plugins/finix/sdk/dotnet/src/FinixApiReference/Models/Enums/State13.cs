using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The current state of the <c>Settlement Queue Entry</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State13>))]
public sealed record State13 : OpenStringEnum<State13>
{
    private State13(string value) : base(value)
    {
    }

    public static readonly State13 AwaitingSettlementTime = new("AWAITING_SETTLEMENT_TIME");

    public static readonly State13 Pending = new("PENDING");

    public static readonly State13 Released = new("RELEASED");

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
