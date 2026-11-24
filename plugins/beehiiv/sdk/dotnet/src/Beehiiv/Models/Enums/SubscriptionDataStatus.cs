using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The status of the subscription.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SubscriptionDataStatus>))]
public sealed record SubscriptionDataStatus : OpenStringEnum<SubscriptionDataStatus>
{
    private SubscriptionDataStatus(string value) : base(value)
    {
    }

    public static readonly SubscriptionDataStatus Validating = new("validating");

    public static readonly SubscriptionDataStatus Invalid = new("invalid");

    public static readonly SubscriptionDataStatus Pending = new("pending");

    public static readonly SubscriptionDataStatus Active = new("active");

    public static readonly SubscriptionDataStatus Inactive = new("inactive");

    public static readonly SubscriptionDataStatus NeedsAttention = new("needs_attention");

    public TResult Match<TResult>(Func<TResult> onValidating,
        Func<TResult> onInvalid,
        Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onNeedsAttention,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validating => onValidating(),
            _ when this == Invalid => onInvalid(),
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == NeedsAttention => onNeedsAttention(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidating,
        Action onInvalid,
        Action onPending,
        Action onActive,
        Action onInactive,
        Action onNeedsAttention,
        Action<string> otherwise)
    {
        if (this == Validating) onValidating();
        else if (this == Invalid) onInvalid();
        else if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == NeedsAttention) onNeedsAttention();
        else otherwise(Value);
    }
}
