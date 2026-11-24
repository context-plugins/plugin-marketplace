using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ExecutorStatus>))]
public sealed record ExecutorStatus : OpenStringEnum<ExecutorStatus>
{
    private ExecutorStatus(string value) : base(value)
    {
    }

    public static readonly ExecutorStatus ExecutorStatusUnspecified = new("EXECUTOR_STATUS_UNSPECIFIED");

    public static readonly ExecutorStatus ExecutorStatusActive = new("EXECUTOR_STATUS_ACTIVE");

    public static readonly ExecutorStatus ExecutorStatusDead = new("EXECUTOR_STATUS_DEAD");

    public TResult Match<TResult>(Func<TResult> onExecutorStatusUnspecified,
        Func<TResult> onExecutorStatusActive,
        Func<TResult> onExecutorStatusDead,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ExecutorStatusUnspecified => onExecutorStatusUnspecified(),
            _ when this == ExecutorStatusActive => onExecutorStatusActive(),
            _ when this == ExecutorStatusDead => onExecutorStatusDead(),
            _ => otherwise(Value)
        };

    public void Match(Action onExecutorStatusUnspecified,
        Action onExecutorStatusActive,
        Action onExecutorStatusDead,
        Action<string> otherwise)
    {
        if (this == ExecutorStatusUnspecified) onExecutorStatusUnspecified();
        else if (this == ExecutorStatusActive) onExecutorStatusActive();
        else if (this == ExecutorStatusDead) onExecutorStatusDead();
        else otherwise(Value);
    }
}
