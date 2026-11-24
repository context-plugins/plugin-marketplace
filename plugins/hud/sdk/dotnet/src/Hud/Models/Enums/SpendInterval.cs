using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SpendInterval>))]
public sealed record SpendInterval : OpenStringEnum<SpendInterval>
{
    private SpendInterval(string value) : base(value)
    {
    }

    public static readonly SpendInterval Week = new("week");

    public static readonly SpendInterval Month = new("month");

    public TResult Match<TResult>(Func<TResult> onWeek, Func<TResult> onMonth, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Week => onWeek(),
            _ when this == Month => onMonth(),
            _ => otherwise(Value)
        };

    public void Match(Action onWeek, Action onMonth, Action<string> otherwise)
    {
        if (this == Week) onWeek();
        else if (this == Month) onMonth();
        else otherwise(Value);
    }
}
