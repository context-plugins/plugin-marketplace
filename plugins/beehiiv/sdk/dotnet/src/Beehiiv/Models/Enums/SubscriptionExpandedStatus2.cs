using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the subscription matching the email address for this publication
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionExpandedStatus2>))]
public sealed record SubscriptionExpandedStatus2 : OpenStringEnum<SubscriptionExpandedStatus2>
{
    private SubscriptionExpandedStatus2(string value) : base(value)
    {
    }

    public static readonly SubscriptionExpandedStatus2 Validating = new("validating");

    public static readonly SubscriptionExpandedStatus2 Invalid = new("invalid");

    public static readonly SubscriptionExpandedStatus2 Pending = new("pending");

    public static readonly SubscriptionExpandedStatus2 Active = new("active");

    public static readonly SubscriptionExpandedStatus2 Inactive = new("inactive");

    public static readonly SubscriptionExpandedStatus2 NeedsAttention = new("needs_attention");

    public static readonly SubscriptionExpandedStatus2 Paused = new("paused");

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
