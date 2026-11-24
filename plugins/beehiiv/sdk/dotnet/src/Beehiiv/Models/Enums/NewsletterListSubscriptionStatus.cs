using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the newsletter list subscription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NewsletterListSubscriptionStatus>))]
public sealed record NewsletterListSubscriptionStatus : OpenStringEnum<NewsletterListSubscriptionStatus>
{
    private NewsletterListSubscriptionStatus(string value) : base(value)
    {
    }

    public static readonly NewsletterListSubscriptionStatus Pending = new("pending");

    public static readonly NewsletterListSubscriptionStatus Active = new("active");

    public static readonly NewsletterListSubscriptionStatus Inactive = new("inactive");

    public static readonly NewsletterListSubscriptionStatus Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onPaused,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onActive, Action onInactive, Action onPaused, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
