using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The type of the timeout that caused this event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeoutType>))]
public sealed record TimeoutType : OpenStringEnum<TimeoutType>
{
    private TimeoutType(string value) : base(value)
    {
    }

    public static readonly TimeoutType StartToClose = new("START_TO_CLOSE");

    public static readonly TimeoutType ScheduleToStart = new("SCHEDULE_TO_START");

    public static readonly TimeoutType ScheduleToClose = new("SCHEDULE_TO_CLOSE");

    public static readonly TimeoutType Heartbeat = new("HEARTBEAT");

    public TResult Match<TResult>(Func<TResult> onStartToClose,
        Func<TResult> onScheduleToStart,
        Func<TResult> onScheduleToClose,
        Func<TResult> onHeartbeat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StartToClose => onStartToClose(),
            _ when this == ScheduleToStart => onScheduleToStart(),
            _ when this == ScheduleToClose => onScheduleToClose(),
            _ when this == Heartbeat => onHeartbeat(),
            _ => otherwise(Value)
        };

    public void Match(Action onStartToClose,
        Action onScheduleToStart,
        Action onScheduleToClose,
        Action onHeartbeat,
        Action<string> otherwise)
    {
        if (this == StartToClose) onStartToClose();
        else if (this == ScheduleToStart) onScheduleToStart();
        else if (this == ScheduleToClose) onScheduleToClose();
        else if (this == Heartbeat) onHeartbeat();
        else otherwise(Value);
    }
}
