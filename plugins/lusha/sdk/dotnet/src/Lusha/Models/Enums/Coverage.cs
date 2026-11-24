using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Coverage>))]
public sealed record Coverage : OpenStringEnum<Coverage>
{
    private Coverage(string value) : base(value)
    {
    }

    public static readonly Coverage LastFunding = new("last_funding");

    public static readonly Coverage AnyRound = new("any_round");

    public static readonly Coverage TotalFunds = new("total_funds");

    public static readonly Coverage LastRound = new("last_round");

    public TResult Match<TResult>(Func<TResult> onLastFunding,
        Func<TResult> onAnyRound,
        Func<TResult> onTotalFunds,
        Func<TResult> onLastRound,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LastFunding => onLastFunding(),
            _ when this == AnyRound => onAnyRound(),
            _ when this == TotalFunds => onTotalFunds(),
            _ when this == LastRound => onLastRound(),
            _ => otherwise(Value)
        };

    public void Match(Action onLastFunding,
        Action onAnyRound,
        Action onTotalFunds,
        Action onLastRound,
        Action<string> otherwise)
    {
        if (this == LastFunding) onLastFunding();
        else if (this == AnyRound) onAnyRound();
        else if (this == TotalFunds) onTotalFunds();
        else if (this == LastRound) onLastRound();
        else otherwise(Value);
    }
}
