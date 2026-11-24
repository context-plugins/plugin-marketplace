using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// When scheduled changes take effect.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ChangeScheduledAt>))]
public sealed record ChangeScheduledAt : OpenStringEnum<ChangeScheduledAt>
{
    private ChangeScheduledAt(string value) : base(value)
    {
    }

    public static readonly ChangeScheduledAt Now = new("now");

    public static readonly ChangeScheduledAt CycleEnd = new("cycle_end");

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
