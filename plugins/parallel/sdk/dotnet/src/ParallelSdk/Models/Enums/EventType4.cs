using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<EventType4>))]
public sealed record EventType4 : OpenStringEnum<EventType4>
{
    private EventType4(string value) : base(value)
    {
    }

    public static readonly EventType4 MonitorEventDetected = new("monitor.event.detected");

    public static readonly EventType4 MonitorExecutionCompleted = new("monitor.execution.completed");

    public static readonly EventType4 MonitorExecutionFailed = new("monitor.execution.failed");

    public TResult Match<TResult>(Func<TResult> onMonitorEventDetected,
        Func<TResult> onMonitorExecutionCompleted,
        Func<TResult> onMonitorExecutionFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == MonitorEventDetected => onMonitorEventDetected(),
            _ when this == MonitorExecutionCompleted => onMonitorExecutionCompleted(),
            _ when this == MonitorExecutionFailed => onMonitorExecutionFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onMonitorEventDetected,
        Action onMonitorExecutionCompleted,
        Action onMonitorExecutionFailed,
        Action<string> otherwise)
    {
        if (this == MonitorEventDetected) onMonitorEventDetected();
        else if (this == MonitorExecutionCompleted) onMonitorExecutionCompleted();
        else if (this == MonitorExecutionFailed) onMonitorExecutionFailed();
        else otherwise(Value);
    }
}
