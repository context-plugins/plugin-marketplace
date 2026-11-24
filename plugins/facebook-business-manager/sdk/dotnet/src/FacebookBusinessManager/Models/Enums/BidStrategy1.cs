using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<BidStrategy1>))]
public sealed record BidStrategy1 : OpenStringEnum<BidStrategy1>
{
    private BidStrategy1(string value) : base(value)
    {
    }

    public static readonly BidStrategy1 LowestCostWithoutCap = new("LOWEST_COST_WITHOUT_CAP");

    public static readonly BidStrategy1 LowestCostWithBidCap = new("LOWEST_COST_WITH_BID_CAP");

    public static readonly BidStrategy1 CostCap = new("COST_CAP");

    public TResult Match<TResult>(Func<TResult> onLowestCostWithoutCap,
        Func<TResult> onLowestCostWithBidCap,
        Func<TResult> onCostCap,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LowestCostWithoutCap => onLowestCostWithoutCap(),
            _ when this == LowestCostWithBidCap => onLowestCostWithBidCap(),
            _ when this == CostCap => onCostCap(),
            _ => otherwise(Value)
        };

    public void Match(Action onLowestCostWithoutCap,
        Action onLowestCostWithBidCap,
        Action onCostCap,
        Action<string> otherwise)
    {
        if (this == LowestCostWithoutCap) onLowestCostWithoutCap();
        else if (this == LowestCostWithBidCap) onLowestCostWithBidCap();
        else if (this == CostCap) onCostCap();
        else otherwise(Value);
    }
}
