using System;
using System.Text.Json.Serialization;
using FacebookBusinessManager.Core.Enum;

namespace FacebookBusinessManager.Models.Enums;

/// <summary>
/// The configured status of the campaign
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1FacebookBusinessManagerFacebookMarketingCampaignsApi>))]
public sealed record Status1FacebookBusinessManagerFacebookMarketingCampaignsApi : OpenStringEnum<Status1FacebookBusinessManagerFacebookMarketingCampaignsApi>
{
    private Status1FacebookBusinessManagerFacebookMarketingCampaignsApi(string value) : base(value)
    {
    }

    public static readonly Status1FacebookBusinessManagerFacebookMarketingCampaignsApi Active = new("ACTIVE");

    public static readonly Status1FacebookBusinessManagerFacebookMarketingCampaignsApi Paused = new("PAUSED");

    public static readonly Status1FacebookBusinessManagerFacebookMarketingCampaignsApi Deleted = new("DELETED");

    public static readonly Status1FacebookBusinessManagerFacebookMarketingCampaignsApi Archived = new("ARCHIVED");

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
