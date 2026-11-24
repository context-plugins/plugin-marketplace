using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EventType>))]
public sealed record EventType : OpenStringEnum<EventType>
{
    private EventType(string value) : base(value)
    {
    }

    public static readonly EventType TaskRunStatus = new("task_run.status");

    public TResult Match<TResult>(Func<TResult> onTaskRunStatus, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TaskRunStatus => onTaskRunStatus(),
            _ => otherwise(Value)
        };

    public void Match(Action onTaskRunStatus, Action<string> otherwise)
    {
        if (this == TaskRunStatus) onTaskRunStatus();
        else otherwise(Value);
    }
}
