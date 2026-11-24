using System;
using System.Text.Json.Serialization;
using Divvy.Core.Enum;

namespace Divvy.Models.Enums;

/// <summary>
/// Enum for Risk verification decision.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VerificationDecisionType>))]
public sealed record VerificationDecisionType : OpenStringEnum<VerificationDecisionType>
{
    private VerificationDecisionType(string value) : base(value)
    {
    }

    public static readonly VerificationDecisionType Approve = new("APPROVE");

    public static readonly VerificationDecisionType Review = new("REVIEW");

    public static readonly VerificationDecisionType Hold = new("HOLD");

    public static readonly VerificationDecisionType Decline = new("DECLINE");

    public static readonly VerificationDecisionType Pending = new("PENDING");

    public static readonly VerificationDecisionType InProgress = new("IN_PROGRESS");

    public TResult Match<TResult>(Func<TResult> onApprove,
        Func<TResult> onReview,
        Func<TResult> onHold,
        Func<TResult> onDecline,
        Func<TResult> onPending,
        Func<TResult> onInProgress,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Approve => onApprove(),
            _ when this == Review => onReview(),
            _ when this == Hold => onHold(),
            _ when this == Decline => onDecline(),
            _ when this == Pending => onPending(),
            _ when this == InProgress => onInProgress(),
            _ => otherwise(Value)
        };

    public void Match(Action onApprove,
        Action onReview,
        Action onHold,
        Action onDecline,
        Action onPending,
        Action onInProgress,
        Action<string> otherwise)
    {
        if (this == Approve) onApprove();
        else if (this == Review) onReview();
        else if (this == Hold) onHold();
        else if (this == Decline) onDecline();
        else if (this == Pending) onPending();
        else if (this == InProgress) onInProgress();
        else otherwise(Value);
    }
}
