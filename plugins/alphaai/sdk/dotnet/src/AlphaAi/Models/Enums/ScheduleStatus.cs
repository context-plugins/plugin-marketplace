using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ScheduleStatus>))]
public sealed record ScheduleStatus : OpenStringEnum<ScheduleStatus>
{
    private ScheduleStatus(string value) : base(value)
    {
    }

    public static readonly ScheduleStatus Scheduled = new("scheduled");

    public static readonly ScheduleStatus Postponed = new("postponed");

    public static readonly ScheduleStatus Cancelled = new("cancelled");

    public TResult Match<TResult>(Func<TResult> onScheduled,
        Func<TResult> onPostponed,
        Func<TResult> onCancelled,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Scheduled => onScheduled(),
            _ when this == Postponed => onPostponed(),
            _ when this == Cancelled => onCancelled(),
            _ => otherwise(Value)
        };

    public void Match(Action onScheduled, Action onPostponed, Action onCancelled, Action<string> otherwise)
    {
        if (this == Scheduled) onScheduled();
        else if (this == Postponed) onPostponed();
        else if (this == Cancelled) onCancelled();
        else otherwise(Value);
    }
}
