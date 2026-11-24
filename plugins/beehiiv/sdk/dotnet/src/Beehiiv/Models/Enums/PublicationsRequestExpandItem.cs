using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicationsRequestExpandItem>))]
public sealed record PublicationsRequestExpandItem : OpenStringEnum<PublicationsRequestExpandItem>
{
    private PublicationsRequestExpandItem(string value) : base(value)
    {
    }

    public static readonly PublicationsRequestExpandItem Stats = new("stats");

    public static readonly PublicationsRequestExpandItem StatActiveSubscriptions = new("stat_active_subscriptions");

    public static readonly PublicationsRequestExpandItem StatActivePremiumSubscriptions = new(
        "stat_active_premium_subscriptions");

    public static readonly PublicationsRequestExpandItem StatActiveFreeSubscriptions = new(
        "stat_active_free_subscriptions");

    public static readonly PublicationsRequestExpandItem StatAverageOpenRate = new("stat_average_open_rate");

    public static readonly PublicationsRequestExpandItem StatAverageClickRate = new("stat_average_click_rate");

    public static readonly PublicationsRequestExpandItem StatTotalSent = new("stat_total_sent");

    public static readonly PublicationsRequestExpandItem StatTotalUniqueOpened = new("stat_total_unique_opened");

    public static readonly PublicationsRequestExpandItem StatTotalClicked = new("stat_total_clicked");

    public TResult Match<TResult>(Func<TResult> onStats,
        Func<TResult> onStatActiveSubscriptions,
        Func<TResult> onStatActivePremiumSubscriptions,
        Func<TResult> onStatActiveFreeSubscriptions,
        Func<TResult> onStatAverageOpenRate,
        Func<TResult> onStatAverageClickRate,
        Func<TResult> onStatTotalSent,
        Func<TResult> onStatTotalUniqueOpened,
        Func<TResult> onStatTotalClicked,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ when this == StatActiveSubscriptions => onStatActiveSubscriptions(),
            _ when this == StatActivePremiumSubscriptions => onStatActivePremiumSubscriptions(),
            _ when this == StatActiveFreeSubscriptions => onStatActiveFreeSubscriptions(),
            _ when this == StatAverageOpenRate => onStatAverageOpenRate(),
            _ when this == StatAverageClickRate => onStatAverageClickRate(),
            _ when this == StatTotalSent => onStatTotalSent(),
            _ when this == StatTotalUniqueOpened => onStatTotalUniqueOpened(),
            _ when this == StatTotalClicked => onStatTotalClicked(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats,
        Action onStatActiveSubscriptions,
        Action onStatActivePremiumSubscriptions,
        Action onStatActiveFreeSubscriptions,
        Action onStatAverageOpenRate,
        Action onStatAverageClickRate,
        Action onStatTotalSent,
        Action onStatTotalUniqueOpened,
        Action onStatTotalClicked,
        Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else if (this == StatActiveSubscriptions) onStatActiveSubscriptions();
        else if (this == StatActivePremiumSubscriptions) onStatActivePremiumSubscriptions();
        else if (this == StatActiveFreeSubscriptions) onStatActiveFreeSubscriptions();
        else if (this == StatAverageOpenRate) onStatAverageOpenRate();
        else if (this == StatAverageClickRate) onStatAverageClickRate();
        else if (this == StatTotalSent) onStatTotalSent();
        else if (this == StatTotalUniqueOpened) onStatTotalUniqueOpened();
        else if (this == StatTotalClicked) onStatTotalClicked();
        else otherwise(Value);
    }
}
