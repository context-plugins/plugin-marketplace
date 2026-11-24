using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// The optimization goal for ad delivery
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OptimizationGoal>))]
public sealed record OptimizationGoal : OpenStringEnum<OptimizationGoal>
{
    private OptimizationGoal(string value) : base(value)
    {
    }

    public static readonly OptimizationGoal LinkClicks = new("LINK_CLICKS");

    public static readonly OptimizationGoal Impressions = new("IMPRESSIONS");

    public static readonly OptimizationGoal Reach = new("REACH");

    public static readonly OptimizationGoal LandingPageViews = new("LANDING_PAGE_VIEWS");

    public static readonly OptimizationGoal OffsiteConversions = new("OFFSITE_CONVERSIONS");

    public static readonly OptimizationGoal LeadGeneration = new("LEAD_GENERATION");

    public static readonly OptimizationGoal AppInstalls = new("APP_INSTALLS");

    public static readonly OptimizationGoal ValueMember = new("VALUE");

    public TResult Match<TResult>(Func<TResult> onLinkClicks,
        Func<TResult> onImpressions,
        Func<TResult> onReach,
        Func<TResult> onLandingPageViews,
        Func<TResult> onOffsiteConversions,
        Func<TResult> onLeadGeneration,
        Func<TResult> onAppInstalls,
        Func<TResult> onValueMember,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LinkClicks => onLinkClicks(),
            _ when this == Impressions => onImpressions(),
            _ when this == Reach => onReach(),
            _ when this == LandingPageViews => onLandingPageViews(),
            _ when this == OffsiteConversions => onOffsiteConversions(),
            _ when this == LeadGeneration => onLeadGeneration(),
            _ when this == AppInstalls => onAppInstalls(),
            _ when this == ValueMember => onValueMember(),
            _ => otherwise(Value)
        };

    public void Match(Action onLinkClicks,
        Action onImpressions,
        Action onReach,
        Action onLandingPageViews,
        Action onOffsiteConversions,
        Action onLeadGeneration,
        Action onAppInstalls,
        Action onValueMember,
        Action<string> otherwise)
    {
        if (this == LinkClicks) onLinkClicks();
        else if (this == Impressions) onImpressions();
        else if (this == Reach) onReach();
        else if (this == LandingPageViews) onLandingPageViews();
        else if (this == OffsiteConversions) onOffsiteConversions();
        else if (this == LeadGeneration) onLeadGeneration();
        else if (this == AppInstalls) onAppInstalls();
        else if (this == ValueMember) onValueMember();
        else otherwise(Value);
    }
}
