using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PricingOutputPricingType>))]
public sealed record PricingOutputPricingType : OpenStringEnum<PricingOutputPricingType>
{
    private PricingOutputPricingType(string value) : base(value)
    {
    }

    public static readonly PricingOutputPricingType RecurringPerUnit = new("RecurringPerUnit");

    public static readonly PricingOutputPricingType RecurringGraduated = new("RecurringGraduated");

    public static readonly PricingOutputPricingType RecurringVolume = new("RecurringVolume");

    public static readonly PricingOutputPricingType RecurringPercentOfTotal = new("RecurringPercentOfTotal");

    public static readonly PricingOutputPricingType UsagePerUnit = new("UsagePerUnit");

    public static readonly PricingOutputPricingType UsageGraduated = new("UsageGraduated");

    public static readonly PricingOutputPricingType UsageVolume = new("UsageVolume");

    public static readonly PricingOutputPricingType UsagePrepaidCredits = new("UsagePrepaidCredits");

    public static readonly PricingOutputPricingType UsageBracketedPrepaidCredits = new("UsageBracketedPrepaidCredits");

    public static readonly PricingOutputPricingType UsageCostPlus = new("UsageCostPlus");

    public static readonly PricingOutputPricingType OneTimePerUnit = new("OneTimePerUnit");

    public static readonly PricingOutputPricingType SeatBasedPerUnit = new("SeatBasedPerUnit");

    public static readonly PricingOutputPricingType SeatBasedGraduated = new("SeatBasedGraduated");

    public static readonly PricingOutputPricingType SeatBasedVolume = new("SeatBasedVolume");

    public static readonly PricingOutputPricingType SeatBasedPrepaidCredits = new("SeatBasedPrepaidCredits");

    public TResult Match<TResult>(Func<TResult> onRecurringPerUnit,
        Func<TResult> onRecurringGraduated,
        Func<TResult> onRecurringVolume,
        Func<TResult> onRecurringPercentOfTotal,
        Func<TResult> onUsagePerUnit,
        Func<TResult> onUsageGraduated,
        Func<TResult> onUsageVolume,
        Func<TResult> onUsagePrepaidCredits,
        Func<TResult> onUsageBracketedPrepaidCredits,
        Func<TResult> onUsageCostPlus,
        Func<TResult> onOneTimePerUnit,
        Func<TResult> onSeatBasedPerUnit,
        Func<TResult> onSeatBasedGraduated,
        Func<TResult> onSeatBasedVolume,
        Func<TResult> onSeatBasedPrepaidCredits,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RecurringPerUnit => onRecurringPerUnit(),
            _ when this == RecurringGraduated => onRecurringGraduated(),
            _ when this == RecurringVolume => onRecurringVolume(),
            _ when this == RecurringPercentOfTotal => onRecurringPercentOfTotal(),
            _ when this == UsagePerUnit => onUsagePerUnit(),
            _ when this == UsageGraduated => onUsageGraduated(),
            _ when this == UsageVolume => onUsageVolume(),
            _ when this == UsagePrepaidCredits => onUsagePrepaidCredits(),
            _ when this == UsageBracketedPrepaidCredits => onUsageBracketedPrepaidCredits(),
            _ when this == UsageCostPlus => onUsageCostPlus(),
            _ when this == OneTimePerUnit => onOneTimePerUnit(),
            _ when this == SeatBasedPerUnit => onSeatBasedPerUnit(),
            _ when this == SeatBasedGraduated => onSeatBasedGraduated(),
            _ when this == SeatBasedVolume => onSeatBasedVolume(),
            _ when this == SeatBasedPrepaidCredits => onSeatBasedPrepaidCredits(),
            _ => otherwise(Value)
        };

    public void Match(Action onRecurringPerUnit,
        Action onRecurringGraduated,
        Action onRecurringVolume,
        Action onRecurringPercentOfTotal,
        Action onUsagePerUnit,
        Action onUsageGraduated,
        Action onUsageVolume,
        Action onUsagePrepaidCredits,
        Action onUsageBracketedPrepaidCredits,
        Action onUsageCostPlus,
        Action onOneTimePerUnit,
        Action onSeatBasedPerUnit,
        Action onSeatBasedGraduated,
        Action onSeatBasedVolume,
        Action onSeatBasedPrepaidCredits,
        Action<string> otherwise)
    {
        if (this == RecurringPerUnit) onRecurringPerUnit();
        else if (this == RecurringGraduated) onRecurringGraduated();
        else if (this == RecurringVolume) onRecurringVolume();
        else if (this == RecurringPercentOfTotal) onRecurringPercentOfTotal();
        else if (this == UsagePerUnit) onUsagePerUnit();
        else if (this == UsageGraduated) onUsageGraduated();
        else if (this == UsageVolume) onUsageVolume();
        else if (this == UsagePrepaidCredits) onUsagePrepaidCredits();
        else if (this == UsageBracketedPrepaidCredits) onUsageBracketedPrepaidCredits();
        else if (this == UsageCostPlus) onUsageCostPlus();
        else if (this == OneTimePerUnit) onOneTimePerUnit();
        else if (this == SeatBasedPerUnit) onSeatBasedPerUnit();
        else if (this == SeatBasedGraduated) onSeatBasedGraduated();
        else if (this == SeatBasedVolume) onSeatBasedVolume();
        else if (this == SeatBasedPrepaidCredits) onSeatBasedPrepaidCredits();
        else otherwise(Value);
    }
}
