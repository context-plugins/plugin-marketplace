using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SubscriptionsGetRequestExpandItem>))]
public sealed record SubscriptionsGetRequestExpandItem : OpenStringEnum<SubscriptionsGetRequestExpandItem>
{
    private SubscriptionsGetRequestExpandItem(string value) : base(value)
    {
    }

    public static readonly SubscriptionsGetRequestExpandItem Stats = new("stats");

    public static readonly SubscriptionsGetRequestExpandItem CustomFields = new("custom_fields");

    public static readonly SubscriptionsGetRequestExpandItem Referrals = new("referrals");

    public static readonly SubscriptionsGetRequestExpandItem Tags = new("tags");

    public static readonly SubscriptionsGetRequestExpandItem NewsletterLists = new("newsletter_lists");

    public TResult Match<TResult>(Func<TResult> onStats,
        Func<TResult> onCustomFields,
        Func<TResult> onReferrals,
        Func<TResult> onTags,
        Func<TResult> onNewsletterLists,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ when this == CustomFields => onCustomFields(),
            _ when this == Referrals => onReferrals(),
            _ when this == Tags => onTags(),
            _ when this == NewsletterLists => onNewsletterLists(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats,
        Action onCustomFields,
        Action onReferrals,
        Action onTags,
        Action onNewsletterLists,
        Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else if (this == CustomFields) onCustomFields();
        else if (this == Referrals) onReferrals();
        else if (this == Tags) onTags();
        else if (this == NewsletterLists) onNewsletterLists();
        else otherwise(Value);
    }
}
