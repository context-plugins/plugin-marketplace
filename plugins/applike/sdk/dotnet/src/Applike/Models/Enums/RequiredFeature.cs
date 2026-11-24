using System;
using System.Text.Json.Serialization;
using Applike.Core.Enum;

namespace Applike.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RequiredFeature>))]
public sealed record RequiredFeature : OpenStringEnum<RequiredFeature>
{
    private RequiredFeature(string value) : base(value)
    {
    }

    public static readonly RequiredFeature Attribution = new("attribution");

    public static readonly RequiredFeature Campaign = new("campaign");

    public static readonly RequiredFeature Creative = new("creative");

    public static readonly RequiredFeature SpendImport = new("spend-import");

    public static readonly RequiredFeature SkadImport = new("skad-import");

    public static readonly RequiredFeature Postback = new("postback");

    public TResult Match<TResult>(Func<TResult> onAttribution,
        Func<TResult> onCampaign,
        Func<TResult> onCreative,
        Func<TResult> onSpendImport,
        Func<TResult> onSkadImport,
        Func<TResult> onPostback,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Attribution => onAttribution(),
            _ when this == Campaign => onCampaign(),
            _ when this == Creative => onCreative(),
            _ when this == SpendImport => onSpendImport(),
            _ when this == SkadImport => onSkadImport(),
            _ when this == Postback => onPostback(),
            _ => otherwise(Value)
        };

    public void Match(Action onAttribution,
        Action onCampaign,
        Action onCreative,
        Action onSpendImport,
        Action onSkadImport,
        Action onPostback,
        Action<string> otherwise)
    {
        if (this == Attribution) onAttribution();
        else if (this == Campaign) onCampaign();
        else if (this == Creative) onCreative();
        else if (this == SpendImport) onSpendImport();
        else if (this == SkadImport) onSkadImport();
        else if (this == Postback) onPostback();
        else otherwise(Value);
    }
}
