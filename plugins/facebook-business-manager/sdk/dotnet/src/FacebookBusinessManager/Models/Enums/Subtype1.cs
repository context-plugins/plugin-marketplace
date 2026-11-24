using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Subtype1>))]
public sealed record Subtype1 : OpenStringEnum<Subtype1>
{
    private Subtype1(string value) : base(value)
    {
    }

    public static readonly Subtype1 Custom = new("CUSTOM");

    public static readonly Subtype1 Website = new("WEBSITE");

    public static readonly Subtype1 App = new("APP");

    public static readonly Subtype1 OfflineConversion = new("OFFLINE_CONVERSION");

    public static readonly Subtype1 Lookalike = new("LOOKALIKE");

    public static readonly Subtype1 Engagement = new("ENGAGEMENT");

    public TResult Match<TResult>(Func<TResult> onCustom,
        Func<TResult> onWebsite,
        Func<TResult> onApp,
        Func<TResult> onOfflineConversion,
        Func<TResult> onLookalike,
        Func<TResult> onEngagement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == Website => onWebsite(),
            _ when this == App => onApp(),
            _ when this == OfflineConversion => onOfflineConversion(),
            _ when this == Lookalike => onLookalike(),
            _ when this == Engagement => onEngagement(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom,
        Action onWebsite,
        Action onApp,
        Action onOfflineConversion,
        Action onLookalike,
        Action onEngagement,
        Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == Website) onWebsite();
        else if (this == App) onApp();
        else if (this == OfflineConversion) onOfflineConversion();
        else if (this == Lookalike) onLookalike();
        else if (this == Engagement) onEngagement();
        else otherwise(Value);
    }
}
