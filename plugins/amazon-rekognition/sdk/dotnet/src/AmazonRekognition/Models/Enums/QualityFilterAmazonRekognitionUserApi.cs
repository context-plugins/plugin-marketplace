using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't searched for in the collection. The default value is NONE.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QualityFilterAmazonRekognitionUserApi>))]
public sealed record QualityFilterAmazonRekognitionUserApi : OpenStringEnum<QualityFilterAmazonRekognitionUserApi>
{
    private QualityFilterAmazonRekognitionUserApi(string value) : base(value)
    {
    }

    public static readonly QualityFilterAmazonRekognitionUserApi None = new("NONE");

    public static readonly QualityFilterAmazonRekognitionUserApi Auto = new("AUTO");

    public static readonly QualityFilterAmazonRekognitionUserApi Low = new("LOW");

    public static readonly QualityFilterAmazonRekognitionUserApi Medium = new("MEDIUM");

    public static readonly QualityFilterAmazonRekognitionUserApi High = new("HIGH");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onAuto,
        Func<TResult> onLow,
        Func<TResult> onMedium,
        Func<TResult> onHigh,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == Auto => onAuto(),
            _ when this == Low => onLow(),
            _ when this == Medium => onMedium(),
            _ when this == High => onHigh(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onAuto,
        Action onLow,
        Action onMedium,
        Action onHigh,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == Auto) onAuto();
        else if (this == Low) onLow();
        else if (this == Medium) onMedium();
        else if (this == High) onHigh();
        else otherwise(Value);
    }
}
