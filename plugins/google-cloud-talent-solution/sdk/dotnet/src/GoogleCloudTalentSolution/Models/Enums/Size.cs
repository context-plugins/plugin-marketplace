using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// The employer's company size.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Size>))]
public sealed record Size : OpenStringEnum<Size>
{
    private Size(string value) : base(value)
    {
    }

    public static readonly Size CompanySizeUnspecified = new("COMPANY_SIZE_UNSPECIFIED");

    public static readonly Size Mini = new("MINI");

    public static readonly Size Small = new("SMALL");

    public static readonly Size Smedium = new("SMEDIUM");

    public static readonly Size Medium = new("MEDIUM");

    public static readonly Size Big = new("BIG");

    public static readonly Size Bigger = new("BIGGER");

    public static readonly Size Giant = new("GIANT");

    public TResult Match<TResult>(Func<TResult> onCompanySizeUnspecified,
        Func<TResult> onMini,
        Func<TResult> onSmall,
        Func<TResult> onSmedium,
        Func<TResult> onMedium,
        Func<TResult> onBig,
        Func<TResult> onBigger,
        Func<TResult> onGiant,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CompanySizeUnspecified => onCompanySizeUnspecified(),
            _ when this == Mini => onMini(),
            _ when this == Small => onSmall(),
            _ when this == Smedium => onSmedium(),
            _ when this == Medium => onMedium(),
            _ when this == Big => onBig(),
            _ when this == Bigger => onBigger(),
            _ when this == Giant => onGiant(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompanySizeUnspecified,
        Action onMini,
        Action onSmall,
        Action onSmedium,
        Action onMedium,
        Action onBig,
        Action onBigger,
        Action onGiant,
        Action<string> otherwise)
    {
        if (this == CompanySizeUnspecified) onCompanySizeUnspecified();
        else if (this == Mini) onMini();
        else if (this == Small) onSmall();
        else if (this == Smedium) onSmedium();
        else if (this == Medium) onMedium();
        else if (this == Big) onBig();
        else if (this == Bigger) onBigger();
        else if (this == Giant) onGiant();
        else otherwise(Value);
    }
}
