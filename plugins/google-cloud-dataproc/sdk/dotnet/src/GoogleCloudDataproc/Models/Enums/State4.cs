using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Output only. A state message specifying the overall job state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State4>))]
public sealed record State4 : OpenStringEnum<State4>
{
    private State4(string value) : base(value)
    {
    }

    public static readonly State4 StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State4 Pending = new("PENDING");

    public static readonly State4 SetupDone = new("SETUP_DONE");

    public static readonly State4 Running = new("RUNNING");

    public static readonly State4 CancelPending = new("CANCEL_PENDING");

    public static readonly State4 CancelStarted = new("CANCEL_STARTED");

    public static readonly State4 Cancelled = new("CANCELLED");

    public static readonly State4 Done = new("DONE");

    public static readonly State4 Error = new("ERROR");

    public static readonly State4 AttemptFailure = new("ATTEMPT_FAILURE");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onPending,
        Func<TResult> onSetupDone,
        Func<TResult> onRunning,
        Func<TResult> onCancelPending,
        Func<TResult> onCancelStarted,
        Func<TResult> onCancelled,
        Func<TResult> onDone,
        Func<TResult> onError,
        Func<TResult> onAttemptFailure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == Pending => onPending(),
            _ when this == SetupDone => onSetupDone(),
            _ when this == Running => onRunning(),
            _ when this == CancelPending => onCancelPending(),
            _ when this == CancelStarted => onCancelStarted(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Done => onDone(),
            _ when this == Error => onError(),
            _ when this == AttemptFailure => onAttemptFailure(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onPending,
        Action onSetupDone,
        Action onRunning,
        Action onCancelPending,
        Action onCancelStarted,
        Action onCancelled,
        Action onDone,
        Action onError,
        Action onAttemptFailure,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == Pending) onPending();
        else if (this == SetupDone) onSetupDone();
        else if (this == Running) onRunning();
        else if (this == CancelPending) onCancelPending();
        else if (this == CancelStarted) onCancelStarted();
        else if (this == Cancelled) onCancelled();
        else if (this == Done) onDone();
        else if (this == Error) onError();
        else if (this == AttemptFailure) onAttemptFailure();
        else otherwise(Value);
    }
}
