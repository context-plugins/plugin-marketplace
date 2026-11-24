using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Plan>))]
public sealed record Plan : OpenStringEnum<Plan>
{
    private Plan(string value) : base(value)
    {
    }

    public static readonly Plan Spark = new("spark");

    public static readonly Plan Beam = new("beam");

    public static readonly Plan Spectrum = new("spectrum");

    public static readonly Plan Aurora = new("aurora");

    public static readonly Plan Custom = new("custom");

    public TResult Match<TResult>(Func<TResult> onSpark,
        Func<TResult> onBeam,
        Func<TResult> onSpectrum,
        Func<TResult> onAurora,
        Func<TResult> onCustom,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Spark => onSpark(),
            _ when this == Beam => onBeam(),
            _ when this == Spectrum => onSpectrum(),
            _ when this == Aurora => onAurora(),
            _ when this == Custom => onCustom(),
            _ => otherwise(Value)
        };

    public void Match(Action onSpark,
        Action onBeam,
        Action onSpectrum,
        Action onAurora,
        Action onCustom,
        Action<string> otherwise)
    {
        if (this == Spark) onSpark();
        else if (this == Beam) onBeam();
        else if (this == Spectrum) onSpectrum();
        else if (this == Aurora) onAurora();
        else if (this == Custom) onCustom();
        else otherwise(Value);
    }
}
