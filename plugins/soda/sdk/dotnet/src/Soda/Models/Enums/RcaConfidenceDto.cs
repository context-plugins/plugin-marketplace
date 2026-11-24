using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<RcaConfidenceDto>))]
public sealed record RcaConfidenceDto : OpenStringEnum<RcaConfidenceDto>
{
    private RcaConfidenceDto(string value) : base(value)
    {
    }

    public static readonly RcaConfidenceDto High = new("high");

    public static readonly RcaConfidenceDto Medium = new("medium");

    public static readonly RcaConfidenceDto Low = new("low");

    public TResult Match<TResult>(Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ => otherwise(Value)
        };

    public void Match(Action onHigh, Action onMedium, Action onLow, Action<string> otherwise)
    {
        if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else otherwise(Value);
    }
}
