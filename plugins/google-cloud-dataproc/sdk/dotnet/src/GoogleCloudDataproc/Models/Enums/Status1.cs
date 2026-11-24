using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 JobExecutionStatusUnspecified = new("JOB_EXECUTION_STATUS_UNSPECIFIED");

    public static readonly Status1 JobExecutionStatusRunning = new("JOB_EXECUTION_STATUS_RUNNING");

    public static readonly Status1 JobExecutionStatusSucceeded = new("JOB_EXECUTION_STATUS_SUCCEEDED");

    public static readonly Status1 JobExecutionStatusFailed = new("JOB_EXECUTION_STATUS_FAILED");

    public static readonly Status1 JobExecutionStatusUnknown = new("JOB_EXECUTION_STATUS_UNKNOWN");

    public TResult Match<TResult>(Func<TResult> onJobExecutionStatusUnspecified,
        Func<TResult> onJobExecutionStatusRunning,
        Func<TResult> onJobExecutionStatusSucceeded,
        Func<TResult> onJobExecutionStatusFailed,
        Func<TResult> onJobExecutionStatusUnknown,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == JobExecutionStatusUnspecified => onJobExecutionStatusUnspecified(),
            _ when this == JobExecutionStatusRunning => onJobExecutionStatusRunning(),
            _ when this == JobExecutionStatusSucceeded => onJobExecutionStatusSucceeded(),
            _ when this == JobExecutionStatusFailed => onJobExecutionStatusFailed(),
            _ when this == JobExecutionStatusUnknown => onJobExecutionStatusUnknown(),
            _ => otherwise(Value)
        };

    public void Match(Action onJobExecutionStatusUnspecified,
        Action onJobExecutionStatusRunning,
        Action onJobExecutionStatusSucceeded,
        Action onJobExecutionStatusFailed,
        Action onJobExecutionStatusUnknown,
        Action<string> otherwise)
    {
        if (this == JobExecutionStatusUnspecified) onJobExecutionStatusUnspecified();
        else if (this == JobExecutionStatusRunning) onJobExecutionStatusRunning();
        else if (this == JobExecutionStatusSucceeded) onJobExecutionStatusSucceeded();
        else if (this == JobExecutionStatusFailed) onJobExecutionStatusFailed();
        else if (this == JobExecutionStatusUnknown) onJobExecutionStatusUnknown();
        else otherwise(Value);
    }
}
