using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

/// <summary>
/// Subscription status.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status>))]
public sealed record Status : OpenStringEnum<Status>
{
    private Status(string value) : base(value)
    {
    }

    public static readonly Status Trialing = new("trialing");

    public static readonly Status Active = new("active");

    public static readonly Status PastDue = new("past_due");

    public static readonly Status Canceled = new("canceled");

    public static readonly Status Incomplete = new("incomplete");

    public static readonly Status IncompleteExpired = new("incomplete_expired");

    public static readonly Status Unpaid = new("unpaid");

    public TResult Match<TResult>(Func<TResult> onTrialing,
        Func<TResult> onActive,
        Func<TResult> onPastDue,
        Func<TResult> onCanceled,
        Func<TResult> onIncomplete,
        Func<TResult> onIncompleteExpired,
        Func<TResult> onUnpaid,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Trialing => onTrialing(),
            _ when this == Active => onActive(),
            _ when this == PastDue => onPastDue(),
            _ when this == Canceled => onCanceled(),
            _ when this == Incomplete => onIncomplete(),
            _ when this == IncompleteExpired => onIncompleteExpired(),
            _ when this == Unpaid => onUnpaid(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrialing,
        Action onActive,
        Action onPastDue,
        Action onCanceled,
        Action onIncomplete,
        Action onIncompleteExpired,
        Action onUnpaid,
        Action<string> otherwise)
    {
        if (this == Trialing) onTrialing();
        else if (this == Active) onActive();
        else if (this == PastDue) onPastDue();
        else if (this == Canceled) onCanceled();
        else if (this == Incomplete) onIncomplete();
        else if (this == IncompleteExpired) onIncompleteExpired();
        else if (this == Unpaid) onUnpaid();
        else otherwise(Value);
    }
}
