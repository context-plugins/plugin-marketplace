using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusFacebookBusinessManagerFacebookMarketingAdsApi>))]
public sealed record StatusFacebookBusinessManagerFacebookMarketingAdsApi : OpenStringEnum<StatusFacebookBusinessManagerFacebookMarketingAdsApi>
{
    private StatusFacebookBusinessManagerFacebookMarketingAdsApi(string value) : base(value)
    {
    }

    public static readonly StatusFacebookBusinessManagerFacebookMarketingAdsApi Active = new("ACTIVE");

    public static readonly StatusFacebookBusinessManagerFacebookMarketingAdsApi Paused = new("PAUSED");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onPaused, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
