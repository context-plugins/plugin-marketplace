using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// The subtype of the custom audience
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Subtype>))]
public sealed record Subtype : OpenStringEnum<Subtype>
{
    private Subtype(string value) : base(value)
    {
    }

    public static readonly Subtype Custom = new("CUSTOM");

    public static readonly Subtype Website = new("WEBSITE");

    public static readonly Subtype App = new("APP");

    public static readonly Subtype OfflineConversion = new("OFFLINE_CONVERSION");

    public static readonly Subtype Claim = new("CLAIM");

    public static readonly Subtype Partner = new("PARTNER");

    public static readonly Subtype Managed = new("MANAGED");

    public static readonly Subtype Video = new("VIDEO");

    public static readonly Subtype Lookalike = new("LOOKALIKE");

    public static readonly Subtype Engagement = new("ENGAGEMENT");

    public TResult Match<TResult>(Func<TResult> onCustom,
        Func<TResult> onWebsite,
        Func<TResult> onApp,
        Func<TResult> onOfflineConversion,
        Func<TResult> onClaim,
        Func<TResult> onPartner,
        Func<TResult> onManaged,
        Func<TResult> onVideo,
        Func<TResult> onLookalike,
        Func<TResult> onEngagement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == Website => onWebsite(),
            _ when this == App => onApp(),
            _ when this == OfflineConversion => onOfflineConversion(),
            _ when this == Claim => onClaim(),
            _ when this == Partner => onPartner(),
            _ when this == Managed => onManaged(),
            _ when this == Video => onVideo(),
            _ when this == Lookalike => onLookalike(),
            _ when this == Engagement => onEngagement(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom,
        Action onWebsite,
        Action onApp,
        Action onOfflineConversion,
        Action onClaim,
        Action onPartner,
        Action onManaged,
        Action onVideo,
        Action onLookalike,
        Action onEngagement,
        Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == Website) onWebsite();
        else if (this == App) onApp();
        else if (this == OfflineConversion) onOfflineConversion();
        else if (this == Claim) onClaim();
        else if (this == Partner) onPartner();
        else if (this == Managed) onManaged();
        else if (this == Video) onVideo();
        else if (this == Lookalike) onLookalike();
        else if (this == Engagement) onEngagement();
        else otherwise(Value);
    }
}
