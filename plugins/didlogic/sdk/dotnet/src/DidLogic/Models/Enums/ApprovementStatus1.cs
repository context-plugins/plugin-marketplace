using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Document approval status (in review = pending, verified = approved)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ApprovementStatus1>))]
public sealed record ApprovementStatus1 : OpenStringEnum<ApprovementStatus1>
{
    private ApprovementStatus1(string value) : base(value)
    {
    }

    public static readonly ApprovementStatus1 InReview = new("in review");

    public static readonly ApprovementStatus1 Verified = new("verified");

    public static readonly ApprovementStatus1 Rejected = new("rejected");

    public static readonly ApprovementStatus1 Expired = new("expired");

    public TResult Match<TResult>(Func<TResult> onInReview,
        Func<TResult> onVerified,
        Func<TResult> onRejected,
        Func<TResult> onExpired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InReview => onInReview(),
            _ when this == Verified => onVerified(),
            _ when this == Rejected => onRejected(),
            _ when this == Expired => onExpired(),
            _ => otherwise(Value)
        };

    public void Match(Action onInReview,
        Action onVerified,
        Action onRejected,
        Action onExpired,
        Action<string> otherwise)
    {
        if (this == InReview) onInReview();
        else if (this == Verified) onVerified();
        else if (this == Rejected) onRejected();
        else if (this == Expired) onExpired();
        else otherwise(Value);
    }
}
