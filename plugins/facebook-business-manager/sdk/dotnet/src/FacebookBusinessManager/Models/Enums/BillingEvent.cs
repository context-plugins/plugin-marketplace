using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// The event used for billing
/// </summary>
[JsonConverter(typeof(StringEnumConverter<BillingEvent>))]
public sealed record BillingEvent : OpenStringEnum<BillingEvent>
{
    private BillingEvent(string value) : base(value)
    {
    }

    public static readonly BillingEvent Impressions = new("IMPRESSIONS");

    public static readonly BillingEvent LinkClicks = new("LINK_CLICKS");

    public TResult Match<TResult>(Func<TResult> onImpressions,
        Func<TResult> onLinkClicks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Impressions => onImpressions(),
            _ when this == LinkClicks => onLinkClicks(),
            _ => otherwise(Value)
        };

    public void Match(Action onImpressions, Action onLinkClicks, Action<string> otherwise)
    {
        if (this == Impressions) onImpressions();
        else if (this == LinkClicks) onLinkClicks();
        else otherwise(Value);
    }
}
