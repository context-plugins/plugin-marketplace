using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The status of the flywheel iteration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status5>))]
public sealed record Status5 : OpenStringEnum<Status5>
{
    private Status5(string value) : base(value)
    {
    }

    public static readonly Status5 Training = new("TRAINING");

    public static readonly Status5 Evaluating = new("EVALUATING");

    public static readonly Status5 Completed = new("COMPLETED");

    public static readonly Status5 Failed = new("FAILED");

    public static readonly Status5 StopRequested = new("STOP_REQUESTED");

    public static readonly Status5 Stopped = new("STOPPED");

    public TResult Match<TResult>(Func<TResult> onTraining,
        Func<TResult> onEvaluating,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onStopRequested,
        Func<TResult> onStopped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Training => onTraining(),
            _ when this == Evaluating => onEvaluating(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == StopRequested => onStopRequested(),
            _ when this == Stopped => onStopped(),
            _ => otherwise(Value)
        };

    public void Match(Action onTraining,
        Action onEvaluating,
        Action onCompleted,
        Action onFailed,
        Action onStopRequested,
        Action onStopped,
        Action<string> otherwise)
    {
        if (this == Training) onTraining();
        else if (this == Evaluating) onEvaluating();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == StopRequested) onStopRequested();
        else if (this == Stopped) onStopped();
        else otherwise(Value);
    }
}
