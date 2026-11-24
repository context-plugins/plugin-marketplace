using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RcaPriorityDto>))]
public sealed record RcaPriorityDto : OpenStringEnum<RcaPriorityDto>
{
    private RcaPriorityDto(string value) : base(value)
    {
    }

    public static readonly RcaPriorityDto Low = new("low");

    public static readonly RcaPriorityDto Medium = new("medium");

    public static readonly RcaPriorityDto High = new("high");

    public static readonly RcaPriorityDto Urgent = new("urgent");

    public TResult Match<TResult>(Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<TResult> onUrgent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ when this == Urgent => onUrgent(),
            _ => otherwise(Value)
        };

    public void Match(Action onLow, Action onMedium, Action onHigh, Action onUrgent, Action<string> otherwise)
    {
        if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else if (this == Urgent) onUrgent();
        else otherwise(Value);
    }
}
