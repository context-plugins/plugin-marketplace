using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SubscriptionsListRequestExpandItem>))]
public sealed record SubscriptionsListRequestExpandItem : OpenStringEnum<SubscriptionsListRequestExpandItem>
{
    private SubscriptionsListRequestExpandItem(string value) : base(value)
    {
    }

    public static readonly SubscriptionsListRequestExpandItem Stats = new("stats");

    public static readonly SubscriptionsListRequestExpandItem CustomFields = new("custom_fields");

    public static readonly SubscriptionsListRequestExpandItem Referrals = new("referrals");

    public static readonly SubscriptionsListRequestExpandItem NewsletterLists = new("newsletter_lists");

    public TResult Match<TResult>(Func<TResult> onStats,
        Func<TResult> onCustomFields,
        Func<TResult> onReferrals,
        Func<TResult> onNewsletterLists,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Stats => onStats(),
            _ when this == CustomFields => onCustomFields(),
            _ when this == Referrals => onReferrals(),
            _ when this == NewsletterLists => onNewsletterLists(),
            _ => otherwise(Value)
        };

    public void Match(Action onStats,
        Action onCustomFields,
        Action onReferrals,
        Action onNewsletterLists,
        Action<string> otherwise)
    {
        if (this == Stats) onStats();
        else if (this == CustomFields) onCustomFields();
        else if (this == Referrals) onReferrals();
        else if (this == NewsletterLists) onNewsletterLists();
        else otherwise(Value);
    }
}
