using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<StatusParallelAiResponsesApi>))]
public sealed record StatusParallelAiResponsesApi : OpenStringEnum<StatusParallelAiResponsesApi>
{
    private StatusParallelAiResponsesApi(string value) : base(value)
    {
    }

    public static readonly StatusParallelAiResponsesApi InProgress = new("in_progress");

    public static readonly StatusParallelAiResponsesApi Completed = new("completed");

    public static readonly StatusParallelAiResponsesApi Incomplete = new("incomplete");

    public TResult Match<TResult>(Func<TResult> onInProgress,
        Func<TResult> onCompleted,
        Func<TResult> onIncomplete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == InProgress => onInProgress(),
            _ when this == Completed => onCompleted(),
            _ when this == Incomplete => onIncomplete(),
            _ => otherwise(Value)
        };

    public void Match(Action onInProgress, Action onCompleted, Action onIncomplete, Action<string> otherwise)
    {
        if (this == InProgress) onInProgress();
        else if (this == Completed) onCompleted();
        else if (this == Incomplete) onIncomplete();
        else otherwise(Value);
    }
}
