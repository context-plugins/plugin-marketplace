using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// When changes take effect. 'now' starts a new cycle immediately; 'cycle_end' defers to end of current cycle.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ScheduleChangeAt>))]
public sealed record ScheduleChangeAt : OpenStringEnum<ScheduleChangeAt>
{
    private ScheduleChangeAt(string value) : base(value)
    {
    }

    public static readonly ScheduleChangeAt Now = new("now");

    public static readonly ScheduleChangeAt CycleEnd = new("cycle_end");

    public TResult Match<TResult>(Func<TResult> onNow, Func<TResult> onCycleEnd, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Now => onNow(),
            _ when this == CycleEnd => onCycleEnd(),
            _ => otherwise(Value)
        };

    public void Match(Action onNow, Action onCycleEnd, Action<string> otherwise)
    {
        if (this == Now) onNow();
        else if (this == CycleEnd) onCycleEnd();
        else otherwise(Value);
    }
}
