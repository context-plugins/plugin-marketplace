using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the subscription.&lt;br&gt;<c>validating</c> - The email address is being validated.&lt;br&gt;<c>invalid</c> - The email address is invalid.&lt;br&gt;<c>pending</c> - The email address is valid, but the subscription is pending double opt-in.&lt;br&gt;<c>active</c> - The email was valid and the subscription is active.&lt;br&gt;<c>inactive</c> - The subscription was made inactive, possibly due to an unsubscribe.&lt;br&gt;<c>needs_attention</c> - The subscription requires approval or denial.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionExpandedStatus1>))]
public sealed record SubscriptionExpandedStatus1 : OpenStringEnum<SubscriptionExpandedStatus1>
{
    private SubscriptionExpandedStatus1(string value) : base(value)
    {
    }

    public static readonly SubscriptionExpandedStatus1 Validating = new("validating");

    public static readonly SubscriptionExpandedStatus1 Invalid = new("invalid");

    public static readonly SubscriptionExpandedStatus1 Pending = new("pending");

    public static readonly SubscriptionExpandedStatus1 Active = new("active");

    public static readonly SubscriptionExpandedStatus1 Inactive = new("inactive");

    public static readonly SubscriptionExpandedStatus1 NeedsAttention = new("needs_attention");

    public static readonly SubscriptionExpandedStatus1 Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onValidating,
        Func<TResult> onInvalid,
        Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onNeedsAttention,
        Func<TResult> onPaused,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validating => onValidating(),
            _ when this == Invalid => onInvalid(),
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == NeedsAttention => onNeedsAttention(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidating,
        Action onInvalid,
        Action onPending,
        Action onActive,
        Action onInactive,
        Action onNeedsAttention,
        Action onPaused,
        Action<string> otherwise)
    {
        if (this == Validating) onValidating();
        else if (this == Invalid) onInvalid();
        else if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == NeedsAttention) onNeedsAttention();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
