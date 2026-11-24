using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Jobs>))]
public sealed record Jobs : OpenStringEnum<Jobs>
{
    private Jobs(string value) : base(value)
    {
    }

    public static readonly Jobs JobExecutionStatusUnspecified = new("JOB_EXECUTION_STATUS_UNSPECIFIED");

    public static readonly Jobs JobExecutionStatusRunning = new("JOB_EXECUTION_STATUS_RUNNING");

    public static readonly Jobs JobExecutionStatusSucceeded = new("JOB_EXECUTION_STATUS_SUCCEEDED");

    public static readonly Jobs JobExecutionStatusFailed = new("JOB_EXECUTION_STATUS_FAILED");

    public static readonly Jobs JobExecutionStatusUnknown = new("JOB_EXECUTION_STATUS_UNKNOWN");

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
