using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Level>))]
public sealed record Level : OpenStringEnum<Level>
{
    private Level(string value) : base(value)
    {
    }

    public static readonly Level Account = new("account");

    public static readonly Level Campaign = new("campaign");

    public static readonly Level Adset = new("adset");

    public static readonly Level Ad = new("ad");

    public TResult Match<TResult>(Func<TResult> onAccount,
        Func<TResult> onCampaign,
        Func<TResult> onAdset,
        Func<TResult> onAd,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Account => onAccount(),
            _ when this == Campaign => onCampaign(),
            _ when this == Adset => onAdset(),
            _ when this == Ad => onAd(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccount, Action onCampaign, Action onAdset, Action onAd, Action<string> otherwise)
    {
        if (this == Account) onAccount();
        else if (this == Campaign) onCampaign();
        else if (this == Adset) onAdset();
        else if (this == Ad) onAd();
        else otherwise(Value);
    }
}
