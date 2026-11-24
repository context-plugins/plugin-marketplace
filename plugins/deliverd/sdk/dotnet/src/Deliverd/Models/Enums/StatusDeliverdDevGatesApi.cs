using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevGatesApi>))]
public sealed record StatusDeliverdDevGatesApi : OpenStringEnum<StatusDeliverdDevGatesApi>
{
    private StatusDeliverdDevGatesApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevGatesApi Allowed = new("allowed");

    public static readonly StatusDeliverdDevGatesApi Denied = new("denied");

    public static readonly StatusDeliverdDevGatesApi Pending = new("pending");

    public static readonly StatusDeliverdDevGatesApi Approved = new("approved");

    public static readonly StatusDeliverdDevGatesApi Rejected = new("rejected");

    public static readonly StatusDeliverdDevGatesApi ChangesRequested = new("changes_requested");

    public static readonly StatusDeliverdDevGatesApi Expired = new("expired");

    public static readonly StatusDeliverdDevGatesApi Cancelled = new("cancelled");

    public static readonly StatusDeliverdDevGatesApi Revoked = new("revoked");

    public static readonly StatusDeliverdDevGatesApi Used = new("used");

    public TResult Match<TResult>(Func<TResult> onAllowed,
        Func<TResult> onDenied,
        Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onChangesRequested,
        Func<TResult> onExpired,
        Func<TResult> onCancelled,
        Func<TResult> onRevoked,
        Func<TResult> onUsed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allowed => onAllowed(),
            _ when this == Denied => onDenied(),
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ when this == Expired => onExpired(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Revoked => onRevoked(),
            _ when this == Used => onUsed(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowed,
        Action onDenied,
        Action onPending,
        Action onApproved,
        Action onRejected,
        Action onChangesRequested,
        Action onExpired,
        Action onCancelled,
        Action onRevoked,
        Action onUsed,
        Action<string> otherwise)
    {
        if (this == Allowed) onAllowed();
        else if (this == Denied) onDenied();
        else if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == ChangesRequested) onChangesRequested();
        else if (this == Expired) onExpired();
        else if (this == Cancelled) onCancelled();
        else if (this == Revoked) onRevoked();
        else if (this == Used) onUsed();
        else otherwise(Value);
    }
}
