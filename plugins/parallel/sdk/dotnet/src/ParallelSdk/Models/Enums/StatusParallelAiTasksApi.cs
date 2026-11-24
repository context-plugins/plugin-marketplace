using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Status of the run.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusParallelAiTasksApi>))]
public sealed record StatusParallelAiTasksApi : OpenStringEnum<StatusParallelAiTasksApi>
{
    private StatusParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly StatusParallelAiTasksApi Queued = new("queued");

    public static readonly StatusParallelAiTasksApi ActionRequired = new("action_required");

    public static readonly StatusParallelAiTasksApi Running = new("running");

    public static readonly StatusParallelAiTasksApi Completed = new("completed");

    public static readonly StatusParallelAiTasksApi Failed = new("failed");

    public static readonly StatusParallelAiTasksApi Cancelling = new("cancelling");

    public static readonly StatusParallelAiTasksApi Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onQueued,
        Func<TResult> onActionRequired,
        Func<TResult> onRunning,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onCancelling,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ when this == ActionRequired => onActionRequired(),
            _ when this == Running => onRunning(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == Cancelling => onCancelling(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued,
        Action onActionRequired,
        Action onRunning,
        Action onCompleted,
        Action onFailed,
        Action onCancelling,
        Action onCancelled,
        Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else if (this == ActionRequired) onActionRequired();
        else if (this == Running) onRunning();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == Cancelling) onCancelling();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
