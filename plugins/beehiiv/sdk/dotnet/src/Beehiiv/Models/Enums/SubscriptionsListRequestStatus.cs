using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SubscriptionsListRequestStatus>))]
public sealed record SubscriptionsListRequestStatus : OpenStringEnum<SubscriptionsListRequestStatus>
{
    private SubscriptionsListRequestStatus(string value) : base(value)
    {
    }

    public static readonly SubscriptionsListRequestStatus Validating = new("validating");

    public static readonly SubscriptionsListRequestStatus Invalid = new("invalid");

    public static readonly SubscriptionsListRequestStatus Pending = new("pending");

    public static readonly SubscriptionsListRequestStatus Active = new("active");

    public static readonly SubscriptionsListRequestStatus Inactive = new("inactive");

    public static readonly SubscriptionsListRequestStatus All = new("all");

    public TResult Match<TResult>(Func<TResult> onValidating,
        Func<TResult> onInvalid,
        Func<TResult> onPending,
        Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onAll,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Validating => onValidating(),
            _ when this == Invalid => onInvalid(),
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == All => onAll(),
            _ => otherwise(Value)
        };

    public void Match(Action onValidating,
        Action onInvalid,
        Action onPending,
        Action onActive,
        Action onInactive,
        Action onAll,
        Action<string> otherwise)
    {
        if (this == Validating) onValidating();
        else if (this == Invalid) onInvalid();
        else if (this == Pending) onPending();
        else if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == All) onAll();
        else otherwise(Value);
    }
}
