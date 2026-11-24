using System;
using System.Text.Json.Serialization;
using Basiq.Core.Enum;

namespace Basiq.Models.Enums;

/// <summary>
/// The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier (referred to as 'bands' or 'steps').
/// </summary>
[JsonConverter(typeof(StringEnumConverter<RateApplicationMethod>))]
public sealed record RateApplicationMethod : OpenStringEnum<RateApplicationMethod>
{
    private RateApplicationMethod(string value) : base(value)
    {
    }

    public static readonly RateApplicationMethod PerTier = new("PER_TIER");

    public static readonly RateApplicationMethod WholeBalance = new("WHOLE_BALANCE");

    public TResult Match<TResult>(Func<TResult> onPerTier,
        Func<TResult> onWholeBalance,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PerTier => onPerTier(),
            _ when this == WholeBalance => onWholeBalance(),
            _ => otherwise(Value)
        };

    public void Match(Action onPerTier, Action onWholeBalance, Action<string> otherwise)
    {
        if (this == PerTier) onPerTier();
        else if (this == WholeBalance) onWholeBalance();
        else otherwise(Value);
    }
}
