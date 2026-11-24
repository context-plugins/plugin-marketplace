using System;
using System.Text.Json.Serialization;
using UiPath.Core.Enum;

namespace UiPath.Models.Enums;

/// <summary>
/// Source attribution for the started jobs
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Source1>))]
public sealed record Source1 : OpenStringEnum<Source1>
{
    private Source1(string value) : base(value)
    {
    }

    public static readonly Source1 Manual = new("Manual");

    public static readonly Source1 Schedule = new("Schedule");

    public static readonly Source1 Queue = new("Queue");

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
