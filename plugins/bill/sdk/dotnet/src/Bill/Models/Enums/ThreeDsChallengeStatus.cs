using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// Enum representing the status of a 3D Secure (3DS) challenge.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ThreeDsChallengeStatus>))]
public sealed record ThreeDsChallengeStatus : OpenStringEnum<ThreeDsChallengeStatus>
{
    private ThreeDsChallengeStatus(string value) : base(value)
    {
    }

    public static readonly ThreeDsChallengeStatus Skipped = new("SKIPPED");

    public static readonly ThreeDsChallengeStatus Pending = new("PENDING");

    public static readonly ThreeDsChallengeStatus Sent = new("SENT");

    public static readonly ThreeDsChallengeStatus Accepted = new("ACCEPTED");

    public static readonly ThreeDsChallengeStatus Rejected = new("REJECTED");

    public static readonly ThreeDsChallengeStatus Cancelled = new("CANCELLED");

    public static readonly ThreeDsChallengeStatus TimedOut = new("TIMED_OUT");

    public static readonly ThreeDsChallengeStatus Failed = new("FAILED");

    public static readonly ThreeDsChallengeStatus Undefined = new("UNDEFINED");

    public TResult Match<TResult>(Func<TResult> onSkipped,
        Func<TResult> onPending,
        Func<TResult> onSent,
        Func<TResult> onAccepted,
        Func<TResult> onRejected,
        Func<TResult> onCancelled,
        Func<TResult> onTimedOut,
        Func<TResult> onFailed,
        Func<TResult> onUndefined,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Skipped => onSkipped(),
            _ when this == Pending => onPending(),
            _ when this == Sent => onSent(),
            _ when this == Accepted => onAccepted(),
            _ when this == Rejected => onRejected(),
            _ when this == Cancelled => onCancelled(),
            _ when this == TimedOut => onTimedOut(),
            _ when this == Failed => onFailed(),
            _ when this == Undefined => onUndefined(),
            _ => otherwise(Value)
        };

    public void Match(Action onSkipped,
        Action onPending,
        Action onSent,
        Action onAccepted,
        Action onRejected,
        Action onCancelled,
        Action onTimedOut,
        Action onFailed,
        Action onUndefined,
        Action<string> otherwise)
    {
        if (this == Skipped) onSkipped();
        else if (this == Pending) onPending();
        else if (this == Sent) onSent();
        else if (this == Accepted) onAccepted();
        else if (this == Rejected) onRejected();
        else if (this == Cancelled) onCancelled();
        else if (this == TimedOut) onTimedOut();
        else if (this == Failed) onFailed();
        else if (this == Undefined) onUndefined();
        else otherwise(Value);
    }
}
