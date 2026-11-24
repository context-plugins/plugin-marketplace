using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Subscription lifecycle status. created→authenticated (mandate authorized)→active→completed/cancelled/expired. pending=charge retry scheduled; halted=multiple failures; paused=temporarily stopped.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusRazorpaySubscriptionsApi>))]
public sealed record StatusRazorpaySubscriptionsApi : OpenStringEnum<StatusRazorpaySubscriptionsApi>
{
    private StatusRazorpaySubscriptionsApi(string value) : base(value)
    {
    }

    public static readonly StatusRazorpaySubscriptionsApi Created = new("created");

    public static readonly StatusRazorpaySubscriptionsApi Authenticated = new("authenticated");

    public static readonly StatusRazorpaySubscriptionsApi Active = new("active");

    public static readonly StatusRazorpaySubscriptionsApi Pending = new("pending");

    public static readonly StatusRazorpaySubscriptionsApi Halted = new("halted");

    public static readonly StatusRazorpaySubscriptionsApi Cancelled = new("cancelled");

    public static readonly StatusRazorpaySubscriptionsApi Completed = new("completed");

    public static readonly StatusRazorpaySubscriptionsApi Expired = new("expired");

    public static readonly StatusRazorpaySubscriptionsApi Paused = new("paused");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onAuthenticated,
        Func<TResult> onActive,
        Func<TResult> onPending,
        Func<TResult> onHalted,
        Func<TResult> onCancelled,
        Func<TResult> onCompleted,
        Func<TResult> onExpired,
        Func<TResult> onPaused,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == Authenticated => onAuthenticated(),
            _ when this == Active => onActive(),
            _ when this == Pending => onPending(),
            _ when this == Halted => onHalted(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Completed => onCompleted(),
            _ when this == Expired => onExpired(),
            _ when this == Paused => onPaused(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated,
        Action onAuthenticated,
        Action onActive,
        Action onPending,
        Action onHalted,
        Action onCancelled,
        Action onCompleted,
        Action onExpired,
        Action onPaused,
        Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == Authenticated) onAuthenticated();
        else if (this == Active) onActive();
        else if (this == Pending) onPending();
        else if (this == Halted) onHalted();
        else if (this == Cancelled) onCancelled();
        else if (this == Completed) onCompleted();
        else if (this == Expired) onExpired();
        else if (this == Paused) onPaused();
        else otherwise(Value);
    }
}
