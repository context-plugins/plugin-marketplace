using System;
using System.Text.Json.Serialization;
using Upstox.Core.Enum;

namespace Upstox.Models.Enums;

/// <summary>
/// Defines the strategy for the GTT order leg:
/// ENTRY - First leg order
/// STOPLOSS - Stop-loss order
/// TARGET - Target order
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Strategy>))]
public sealed record Strategy : OpenStringEnum<Strategy>
{
    private Strategy(string value) : base(value)
    {
    }

    public static readonly Strategy Entry = new("ENTRY");

    public static readonly Strategy Stoploss = new("STOPLOSS");

    public static readonly Strategy Target = new("TARGET");

    public TResult Match<TResult>(Func<TResult> onEntry,
        Func<TResult> onStoploss,
        Func<TResult> onTarget,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Entry => onEntry(),
            _ when this == Stoploss => onStoploss(),
            _ when this == Target => onTarget(),
            _ => otherwise(Value)
        };

    public void Match(Action onEntry, Action onStoploss, Action onTarget, Action<string> otherwise)
    {
        if (this == Entry) onEntry();
        else if (this == Stoploss) onStoploss();
        else if (this == Target) onTarget();
        else otherwise(Value);
    }
}
