using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// When to pause. 'now' = immediately; 'cycle_end' = after current cycle.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PauseAt>))]
public sealed record PauseAt : OpenStringEnum<PauseAt>
{
    private PauseAt(string value) : base(value)
    {
    }

    public static readonly PauseAt Now = new("now");

    public static readonly PauseAt CycleEnd = new("cycle_end");

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
