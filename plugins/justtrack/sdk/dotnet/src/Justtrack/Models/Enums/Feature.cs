using System;
using System.Text.Json.Serialization;
using Justtrack.Core.Enum;

namespace Justtrack.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Feature>))]
public sealed record Feature : OpenStringEnum<Feature>
{
    private Feature(string value) : base(value)
    {
    }

    public static readonly Feature Attribution = new("attribution");

    public static readonly Feature Campaign = new("campaign");

    public static readonly Feature Creative = new("creative");

    public static readonly Feature SpendImport = new("spend-import");

    public static readonly Feature SkadImport = new("skad-import");

    public static readonly Feature Postback = new("postback");

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
