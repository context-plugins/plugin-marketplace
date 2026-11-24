using System;
using System.Text.Json.Serialization;
using Leadspace.Core.Enum;

namespace Leadspace.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ModelLevel>))]
public sealed record ModelLevel : OpenStringEnum<ModelLevel>
{
    private ModelLevel(string value) : base(value)
    {
    }

    public static readonly ModelLevel High = new("High");

    public static readonly ModelLevel Medium = new("Medium");

    public static readonly ModelLevel Low = new("Low");

    public static readonly ModelLevel NoIntent = new("NO_INTENT");

    public TResult Match<TResult>(Func<TResult> onHigh,
        Func<TResult> onMedium,
        Func<TResult> onLow,
        Func<TResult> onNoIntent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == High => onHigh(),
            _ when this == Medium => onMedium(),
            _ when this == Low => onLow(),
            _ when this == NoIntent => onNoIntent(),
            _ => otherwise(Value)
        };

    public void Match(Action onHigh, Action onMedium, Action onLow, Action onNoIntent, Action<string> otherwise)
    {
        if (this == High) onHigh();
        else if (this == Medium) onMedium();
        else if (this == Low) onLow();
        else if (this == NoIntent) onNoIntent();
        else otherwise(Value);
    }
}
