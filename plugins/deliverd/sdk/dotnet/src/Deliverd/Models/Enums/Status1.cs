using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Pending = new("pending");

    public static readonly Status1 Approved = new("approved");

    public static readonly Status1 Rejected = new("rejected");

    public static readonly Status1 ChangesRequested = new("changes_requested");

    public static readonly Status1 Expired = new("expired");

    public static readonly Status1 Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onChangesRequested,
        Func<TResult> onExpired,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ when this == Expired => onExpired(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onApproved,
        Action onRejected,
        Action onChangesRequested,
        Action onExpired,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == ChangesRequested) onChangesRequested();
        else if (this == Expired) onExpired();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
