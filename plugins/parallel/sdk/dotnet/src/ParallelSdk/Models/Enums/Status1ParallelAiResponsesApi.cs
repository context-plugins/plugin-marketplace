using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1ParallelAiResponsesApi>))]
public sealed record Status1ParallelAiResponsesApi : OpenStringEnum<Status1ParallelAiResponsesApi>
{
    private Status1ParallelAiResponsesApi(string value) : base(value)
    {
    }

    public static readonly Status1ParallelAiResponsesApi Completed = new("completed");

    public static readonly Status1ParallelAiResponsesApi Failed = new("failed");

    public static readonly Status1ParallelAiResponsesApi InProgress = new("in_progress");

    public static readonly Status1ParallelAiResponsesApi Cancelled = new("cancelled");

    public static readonly Status1ParallelAiResponsesApi Queued = new("queued");

    public static readonly Status1ParallelAiResponsesApi Incomplete = new("incomplete");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<TResult> onInProgress,
        Func<TResult> onCancelled,
        Func<TResult> onQueued,
        Func<TResult> onIncomplete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ when this == InProgress => onInProgress(),
            _ when this == Cancelled => onCancelled(),
            _ when this == Queued => onQueued(),
            _ when this == Incomplete => onIncomplete(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted,
        Action onFailed,
        Action onInProgress,
        Action onCancelled,
        Action onQueued,
        Action onIncomplete,
        Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else if (this == InProgress) onInProgress();
        else if (this == Cancelled) onCancelled();
        else if (this == Queued) onQueued();
        else if (this == Incomplete) onIncomplete();
        else otherwise(Value);
    }
}
