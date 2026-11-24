using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// How the job was initiated
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source>))]
public sealed record Source : OpenStringEnum<Source>
{
    private Source(string value) : base(value)
    {
    }

    public static readonly Source Manual = new("Manual");

    public static readonly Source Schedule = new("Schedule");

    public static readonly Source Queue = new("Queue");

    public TResult Match<TResult>(Func<TResult> onManual,
        Func<TResult> onSchedule,
        Func<TResult> onQueue,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Manual => onManual(),
            _ when this == Schedule => onSchedule(),
            _ when this == Queue => onQueue(),
            _ => otherwise(Value)
        };

    public void Match(Action onManual, Action onSchedule, Action onQueue, Action<string> otherwise)
    {
        if (this == Manual) onManual();
        else if (this == Schedule) onSchedule();
        else if (this == Queue) onQueue();
        else otherwise(Value);
    }
}
