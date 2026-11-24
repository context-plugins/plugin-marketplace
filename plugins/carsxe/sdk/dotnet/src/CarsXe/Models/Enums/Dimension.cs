using System;
using System.Text.Json.Serialization;
using CarsXe.Core.Enum;

namespace CarsXe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Dimension>))]
public sealed record Dimension : OpenStringEnum<Dimension>
{
    private Dimension(string value) : base(value)
    {
    }

    public static readonly Dimension Years = new("years");

    public static readonly Dimension Makes = new("makes");

    public static readonly Dimension Models = new("models");

    public static readonly Dimension Trims = new("trims");

    public static readonly Dimension Variants = new("variants");

    public TResult Match<TResult>(Func<TResult> onYears,
        Func<TResult> onMakes,
        Func<TResult> onModels,
        Func<TResult> onTrims,
        Func<TResult> onVariants,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Years => onYears(),
            _ when this == Makes => onMakes(),
            _ when this == Models => onModels(),
            _ when this == Trims => onTrims(),
            _ when this == Variants => onVariants(),
            _ => otherwise(Value)
        };

    public void Match(Action onYears,
        Action onMakes,
        Action onModels,
        Action onTrims,
        Action onVariants,
        Action<string> otherwise)
    {
        if (this == Years) onYears();
        else if (this == Makes) onMakes();
        else if (this == Models) onModels();
        else if (this == Trims) onTrims();
        else if (this == Variants) onVariants();
        else otherwise(Value);
    }
}
