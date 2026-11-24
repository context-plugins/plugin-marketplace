using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ReviewReplyState>))]
public sealed record ReviewReplyState : OpenStringEnum<ReviewReplyState>
{
    private ReviewReplyState(string value) : base(value)
    {
    }

    public static readonly ReviewReplyState ReviewReplyStateUnspecified = new("REVIEW_REPLY_STATE_UNSPECIFIED");

    public static readonly ReviewReplyState Pending = new("PENDING");

    public static readonly ReviewReplyState Rejected = new("REJECTED");

    public static readonly ReviewReplyState Approved = new("APPROVED");

    public TResult Match<TResult>(Func<TResult> onReviewReplyStateUnspecified,
        Func<TResult> onPending,
        Func<TResult> onRejected,
        Func<TResult> onApproved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReviewReplyStateUnspecified => onReviewReplyStateUnspecified(),
            _ when this == Pending => onPending(),
            _ when this == Rejected => onRejected(),
            _ when this == Approved => onApproved(),
            _ => otherwise(Value)
        };

    public void Match(Action onReviewReplyStateUnspecified,
        Action onPending,
        Action onRejected,
        Action onApproved,
        Action<string> otherwise)
    {
        if (this == ReviewReplyStateUnspecified) onReviewReplyStateUnspecified();
        else if (this == Pending) onPending();
        else if (this == Rejected) onRejected();
        else if (this == Approved) onApproved();
        else otherwise(Value);
    }
}
