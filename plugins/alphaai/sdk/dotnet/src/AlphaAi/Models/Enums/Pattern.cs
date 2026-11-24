using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Pattern>))]
public sealed record Pattern : OpenStringEnum<Pattern>
{
    private Pattern(string value) : base(value)
    {
    }

    public static readonly Pattern OpenMarket = new("open_market");

    public static readonly Pattern PlanOrOffering = new("plan_or_offering");

    public static readonly Pattern HoldersOnly = new("holders_only");

    public TResult Match<TResult>(Func<TResult> onOpenMarket,
        Func<TResult> onPlanOrOffering,
        Func<TResult> onHoldersOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == OpenMarket => onOpenMarket(),
            _ when this == PlanOrOffering => onPlanOrOffering(),
            _ when this == HoldersOnly => onHoldersOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpenMarket, Action onPlanOrOffering, Action onHoldersOnly, Action<string> otherwise)
    {
        if (this == OpenMarket) onOpenMarket();
        else if (this == PlanOrOffering) onPlanOrOffering();
        else if (this == HoldersOnly) onHoldersOnly();
        else otherwise(Value);
    }
}
