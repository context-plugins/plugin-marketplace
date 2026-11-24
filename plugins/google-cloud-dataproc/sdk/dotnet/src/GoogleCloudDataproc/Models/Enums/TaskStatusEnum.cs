using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TaskStatusEnum>))]
public sealed record TaskStatusEnum : OpenStringEnum<TaskStatusEnum>
{
    private TaskStatusEnum(string value) : base(value)
    {
    }

    public static readonly TaskStatusEnum TaskStatusUnspecified = new("TASK_STATUS_UNSPECIFIED");

    public static readonly TaskStatusEnum TaskStatusRunning = new("TASK_STATUS_RUNNING");

    public static readonly TaskStatusEnum TaskStatusSuccess = new("TASK_STATUS_SUCCESS");

    public static readonly TaskStatusEnum TaskStatusFailed = new("TASK_STATUS_FAILED");

    public static readonly TaskStatusEnum TaskStatusKilled = new("TASK_STATUS_KILLED");

    public static readonly TaskStatusEnum TaskStatusPending = new("TASK_STATUS_PENDING");

    public TResult Match<TResult>(Func<TResult> onTaskStatusUnspecified,
        Func<TResult> onTaskStatusRunning,
        Func<TResult> onTaskStatusSuccess,
        Func<TResult> onTaskStatusFailed,
        Func<TResult> onTaskStatusKilled,
        Func<TResult> onTaskStatusPending,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TaskStatusUnspecified => onTaskStatusUnspecified(),
            _ when this == TaskStatusRunning => onTaskStatusRunning(),
            _ when this == TaskStatusSuccess => onTaskStatusSuccess(),
            _ when this == TaskStatusFailed => onTaskStatusFailed(),
            _ when this == TaskStatusKilled => onTaskStatusKilled(),
            _ when this == TaskStatusPending => onTaskStatusPending(),
            _ => otherwise(Value)
        };

    public void Match(Action onTaskStatusUnspecified,
        Action onTaskStatusRunning,
        Action onTaskStatusSuccess,
        Action onTaskStatusFailed,
        Action onTaskStatusKilled,
        Action onTaskStatusPending,
        Action<string> otherwise)
    {
        if (this == TaskStatusUnspecified) onTaskStatusUnspecified();
        else if (this == TaskStatusRunning) onTaskStatusRunning();
        else if (this == TaskStatusSuccess) onTaskStatusSuccess();
        else if (this == TaskStatusFailed) onTaskStatusFailed();
        else if (this == TaskStatusKilled) onTaskStatusKilled();
        else if (this == TaskStatusPending) onTaskStatusPending();
        else otherwise(Value);
    }
}
