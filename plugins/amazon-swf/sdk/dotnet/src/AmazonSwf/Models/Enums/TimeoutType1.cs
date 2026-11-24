using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The type of timeout that expired before the decision task could be completed.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TimeoutType1>))]
public sealed record TimeoutType1 : OpenStringEnum<TimeoutType1>
{
    private TimeoutType1(string value) : base(value)
    {
    }

    public static readonly TimeoutType1 StartToClose = new("START_TO_CLOSE");

    public static readonly TimeoutType1 ScheduleToStart = new("SCHEDULE_TO_START");

    public TResult Match<TResult>(Func<TResult> onStartToClose,
        Func<TResult> onScheduleToStart,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == StartToClose => onStartToClose(),
            _ when this == ScheduleToStart => onScheduleToStart(),
            _ => otherwise(Value)
        };

    public void Match(Action onStartToClose, Action onScheduleToStart, Action<string> otherwise)
    {
        if (this == StartToClose) onStartToClose();
        else if (this == ScheduleToStart) onScheduleToStart();
        else otherwise(Value);
    }
}
