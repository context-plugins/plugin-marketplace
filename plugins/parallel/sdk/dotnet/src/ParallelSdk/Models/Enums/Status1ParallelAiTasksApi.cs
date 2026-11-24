using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1ParallelAiTasksApi>))]
public sealed record Status1ParallelAiTasksApi : OpenStringEnum<Status1ParallelAiTasksApi>
{
    private Status1ParallelAiTasksApi(string value) : base(value)
    {
    }

    public static readonly Status1ParallelAiTasksApi Queued = new("queued");

    public static readonly Status1ParallelAiTasksApi ActionRequired = new("action_required");

    public static readonly Status1ParallelAiTasksApi Running = new("running");

    public static readonly Status1ParallelAiTasksApi Completed = new("completed");

    public static readonly Status1ParallelAiTasksApi Failed = new("failed");

    public static readonly Status1ParallelAiTasksApi Cancelling = new("cancelling");

    public static readonly Status1ParallelAiTasksApi Cancelled = new("cancelled");

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
