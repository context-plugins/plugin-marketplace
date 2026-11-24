using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusDeliverdDevReviewsApi>))]
public sealed record StatusDeliverdDevReviewsApi : OpenStringEnum<StatusDeliverdDevReviewsApi>
{
    private StatusDeliverdDevReviewsApi(string value) : base(value)
    {
    }

    public static readonly StatusDeliverdDevReviewsApi Pending = new("pending");

    public static readonly StatusDeliverdDevReviewsApi Approved = new("approved");

    public static readonly StatusDeliverdDevReviewsApi ChangesRequested = new("changes_requested");

    public static readonly StatusDeliverdDevReviewsApi Expired = new("expired");

    public static readonly StatusDeliverdDevReviewsApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onChangesRequested,
        Func<TResult> onExpired,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == ChangesRequested => onChangesRequested(),
            _ when this == Expired => onExpired(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onApproved,
        Action onChangesRequested,
        Action onExpired,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == ChangesRequested) onChangesRequested();
        else if (this == Expired) onExpired();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
