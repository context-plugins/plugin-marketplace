using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Scale applied to numeric values when rendering the report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<NumberScale>))]
public sealed record NumberScale : OpenStringEnum<NumberScale>
{
    private NumberScale(string value) : base(value)
    {
    }

    public static readonly NumberScale Auto = new("auto");

    public static readonly NumberScale Thousands = new("thousands");

    public static readonly NumberScale Millions = new("millions");

    public static readonly NumberScale Billions = new("billions");

    public static readonly NumberScale Raw = new("raw");

    public TResult Match<TResult>(Func<TResult> onAuto,
        Func<TResult> onThousands,
        Func<TResult> onMillions,
        Func<TResult> onBillions,
        Func<TResult> onRaw,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Auto => onAuto(),
            _ when this == Thousands => onThousands(),
            _ when this == Millions => onMillions(),
            _ when this == Billions => onBillions(),
            _ when this == Raw => onRaw(),
            _ => otherwise(Value)
        };

    public void Match(Action onAuto,
        Action onThousands,
        Action onMillions,
        Action onBillions,
        Action onRaw,
        Action<string> otherwise)
    {
        if (this == Auto) onAuto();
        else if (this == Thousands) onThousands();
        else if (this == Millions) onMillions();
        else if (this == Billions) onBillions();
        else if (this == Raw) onRaw();
        else otherwise(Value);
    }
}
