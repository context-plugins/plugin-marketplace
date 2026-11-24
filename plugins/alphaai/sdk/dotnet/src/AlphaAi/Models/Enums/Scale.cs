using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Enum;

namespace AlphaAi.Models.Enums;

/// <summary>
/// The multiplier <c>numeric</c> is expressed in. Filled only when something in the filing says it: the printed value (<c>$6.76 billion</c>, <c>$60,801 (In millions)</c>), the metric name, the row's own prior figure, the same amount printed with its unit in the filing's prose, or the filing's table header when it names one scale for its tables. Per-share and percentage figures are <c>ones</c>; a per-unit metric (revenue per customer, a price per ounce) never takes a table's scale. Null means the filing did not say — treat <c>numeric</c> as unscaled at your own risk rather than assume millions. Added 2026-09-12; the rules were tightened and every stored read recomputed on 2026-10-01.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scale>))]
public sealed record Scale : OpenStringEnum<Scale>
{
    private Scale(string value) : base(value)
    {
    }

    public static readonly Scale Ones = new("ones");

    public static readonly Scale Thousands = new("thousands");

    public static readonly Scale Millions = new("millions");

    public static readonly Scale Billions = new("billions");

    public static readonly Scale Trillions = new("trillions");

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
