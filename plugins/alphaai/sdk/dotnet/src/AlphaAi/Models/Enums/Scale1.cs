using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// The multiplier <c>numeric</c> is expressed in, by the same rules as a <c>key_metrics</c> row. A bare segment figure takes the table header's scale only when the segments then fit under the read's own revenue line; otherwise null. Added 2026-10-01 to every stored read.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scale1>))]
public sealed record Scale1 : OpenStringEnum<Scale1>
{
    private Scale1(string value) : base(value)
    {
    }

    public static readonly Scale1 Ones = new("ones");

    public static readonly Scale1 Thousands = new("thousands");

    public static readonly Scale1 Millions = new("millions");

    public static readonly Scale1 Billions = new("billions");

    public static readonly Scale1 Trillions = new("trillions");

    public TResult Match<TResult>(Func<TResult> onOnes,
        Func<TResult> onThousands,
        Func<TResult> onMillions,
        Func<TResult> onBillions,
        Func<TResult> onTrillions,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ones => onOnes(),
            _ when this == Thousands => onThousands(),
            _ when this == Millions => onMillions(),
            _ when this == Billions => onBillions(),
            _ when this == Trillions => onTrillions(),
            _ => otherwise(Value)
        };

    public void Match(Action onOnes,
        Action onThousands,
        Action onMillions,
        Action onBillions,
        Action onTrillions,
        Action<string> otherwise)
    {
        if (this == Ones) onOnes();
        else if (this == Thousands) onThousands();
        else if (this == Millions) onMillions();
        else if (this == Billions) onBillions();
        else if (this == Trillions) onTrillions();
        else otherwise(Value);
    }
}
