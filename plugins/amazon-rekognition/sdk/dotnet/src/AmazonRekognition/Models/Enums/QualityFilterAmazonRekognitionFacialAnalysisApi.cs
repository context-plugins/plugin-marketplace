using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

/// <summary>
/// A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't compared. If you specify AUTO, Amazon Rekognition chooses the quality bar. If you specify LOW, MEDIUM, or HIGH, filtering removes all faces that don’t meet the chosen quality bar. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify NONE, no filtering is performed. The defaul
/// </summary>
[JsonConverter(typeof(StringEnumConverter<QualityFilterAmazonRekognitionFacialAnalysisApi>))]
public sealed record QualityFilterAmazonRekognitionFacialAnalysisApi : OpenStringEnum<QualityFilterAmazonRekognitionFacialAnalysisApi>
{
    private QualityFilterAmazonRekognitionFacialAnalysisApi(string value) : base(value)
    {
    }

    public static readonly QualityFilterAmazonRekognitionFacialAnalysisApi None = new("NONE");

    public static readonly QualityFilterAmazonRekognitionFacialAnalysisApi Auto = new("AUTO");

    public static readonly QualityFilterAmazonRekognitionFacialAnalysisApi Low = new("LOW");

    public static readonly QualityFilterAmazonRekognitionFacialAnalysisApi Medium = new("MEDIUM");

    public static readonly QualityFilterAmazonRekognitionFacialAnalysisApi High = new("HIGH");

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
