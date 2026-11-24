using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Required. The application state.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<State>))]
public sealed record State : OpenStringEnum<State>
{
    private State(string value) : base(value)
    {
    }

    public static readonly State StateUnspecified = new("STATE_UNSPECIFIED");

    public static readonly State New = new("NEW");

    public static readonly State NewSaving = new("NEW_SAVING");

    public static readonly State Submitted = new("SUBMITTED");

    public static readonly State Accepted = new("ACCEPTED");

    public static readonly State Running = new("RUNNING");

    public static readonly State Finished = new("FINISHED");

    public static readonly State Failed = new("FAILED");

    public static readonly State Killed = new("KILLED");

    public TResult Match<TResult>(Func<TResult> onStateUnspecified,
        Func<TResult> onNew,
        Func<TResult> onNewSaving,
        Func<TResult> onSubmitted,
        Func<TResult> onAccepted,
        Func<TResult> onRunning,
        Func<TResult> onFinished,
        Func<TResult> onFailed,
        Func<TResult> onKilled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StateUnspecified => onStateUnspecified(),
            _ when this == New => onNew(),
            _ when this == NewSaving => onNewSaving(),
            _ when this == Submitted => onSubmitted(),
            _ when this == Accepted => onAccepted(),
            _ when this == Running => onRunning(),
            _ when this == Finished => onFinished(),
            _ when this == Failed => onFailed(),
            _ when this == Killed => onKilled(),
            _ => otherwise(Value)
        };

    public void Match(Action onStateUnspecified,
        Action onNew,
        Action onNewSaving,
        Action onSubmitted,
        Action onAccepted,
        Action onRunning,
        Action onFinished,
        Action onFailed,
        Action onKilled,
        Action<string> otherwise)
    {
        if (this == StateUnspecified) onStateUnspecified();
        else if (this == New) onNew();
        else if (this == NewSaving) onNewSaving();
        else if (this == Submitted) onSubmitted();
        else if (this == Accepted) onAccepted();
        else if (this == Running) onRunning();
        else if (this == Finished) onFinished();
        else if (this == Failed) onFailed();
        else if (this == Killed) onKilled();
        else otherwise(Value);
    }
}
