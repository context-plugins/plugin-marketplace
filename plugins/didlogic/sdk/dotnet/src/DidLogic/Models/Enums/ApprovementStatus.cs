using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ApprovementStatus>))]
public sealed record ApprovementStatus : OpenStringEnum<ApprovementStatus>
{
    private ApprovementStatus(string value) : base(value)
    {
    }

    public static readonly ApprovementStatus Pending = new("pending");

    public static readonly ApprovementStatus Approved = new("approved");

    public static readonly ApprovementStatus Rejected = new("rejected");

    public static readonly ApprovementStatus Expired = new("expired");

    public static readonly ApprovementStatus InReview = new("in review");

    public static readonly ApprovementStatus Verified = new("verified");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onApproved,
        Func<TResult> onRejected,
        Func<TResult> onExpired,
        Func<TResult> onInReview,
        Func<TResult> onVerified,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Approved => onApproved(),
            _ when this == Rejected => onRejected(),
            _ when this == Expired => onExpired(),
            _ when this == InReview => onInReview(),
            _ when this == Verified => onVerified(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending,
        Action onApproved,
        Action onRejected,
        Action onExpired,
        Action onInReview,
        Action onVerified,
        Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Approved) onApproved();
        else if (this == Rejected) onRejected();
        else if (this == Expired) onExpired();
        else if (this == InReview) onInReview();
        else if (this == Verified) onVerified();
        else otherwise(Value);
    }
}
