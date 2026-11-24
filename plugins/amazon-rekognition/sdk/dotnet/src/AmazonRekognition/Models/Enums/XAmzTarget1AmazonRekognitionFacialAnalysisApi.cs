using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionFacialAnalysisApi>))]
public sealed record XAmzTarget1AmazonRekognitionFacialAnalysisApi : OpenStringEnum<XAmzTarget1AmazonRekognitionFacialAnalysisApi>
{
    private XAmzTarget1AmazonRekognitionFacialAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionFacialAnalysisApi RekognitionServiceDetectFaces = new(
        "RekognitionService.DetectFaces");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectFaces, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectFaces => onRekognitionServiceDetectFaces(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectFaces, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectFaces) onRekognitionServiceDetectFaces();
        else otherwise(Value);
    }
}
