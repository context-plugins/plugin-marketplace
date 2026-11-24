using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1FacebookBusinessManagerFacebookMarketingAdsApi>))]
public sealed record Status1FacebookBusinessManagerFacebookMarketingAdsApi : OpenStringEnum<Status1FacebookBusinessManagerFacebookMarketingAdsApi>
{
    private Status1FacebookBusinessManagerFacebookMarketingAdsApi(string value) : base(value)
    {
    }

    public static readonly Status1FacebookBusinessManagerFacebookMarketingAdsApi Active = new("ACTIVE");

    public static readonly Status1FacebookBusinessManagerFacebookMarketingAdsApi Paused = new("PAUSED");

    public static readonly Status1FacebookBusinessManagerFacebookMarketingAdsApi Deleted = new("DELETED");

    public static readonly Status1FacebookBusinessManagerFacebookMarketingAdsApi Archived = new("ARCHIVED");

    public TResult Match<TResult>(Func<TResult> onActive,
        Func<TResult> onPaused,
        Func<TResult> onDeleted,
        Func<TResult> onArchived,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Paused => onPaused(),
            _ when this == Deleted => onDeleted(),
            _ when this == Archived => onArchived(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onPaused, Action onDeleted, Action onArchived, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Paused) onPaused();
        else if (this == Deleted) onDeleted();
        else if (this == Archived) onArchived();
        else otherwise(Value);
    }
}
