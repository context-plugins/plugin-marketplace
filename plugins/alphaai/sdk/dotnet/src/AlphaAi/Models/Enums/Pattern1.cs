using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Pattern1>))]
public sealed record Pattern1 : OpenStringEnum<Pattern1>
{
    private Pattern1(string value) : base(value)
    {
    }

    public static readonly Pattern1 OpenMarket = new("open_market");

    public static readonly Pattern1 PlanOrOffering = new("plan_or_offering");

    public static readonly Pattern1 HoldersOnly = new("holders_only");

    public static readonly Pattern1 All = new("all");

    public TResult Match<TResult>(Func<TResult> onOpenMarket,
        Func<TResult> onPlanOrOffering,
        Func<TResult> onHoldersOnly,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OpenMarket => onOpenMarket(),
            _ when this == PlanOrOffering => onPlanOrOffering(),
            _ when this == HoldersOnly => onHoldersOnly(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpenMarket,
        Action onPlanOrOffering,
        Action onHoldersOnly,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == OpenMarket) onOpenMarket();
        else if (this == PlanOrOffering) onPlanOrOffering();
        else if (this == HoldersOnly) onHoldersOnly();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
