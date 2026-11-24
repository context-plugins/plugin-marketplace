using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionTextDetectionApi>))]
public sealed record XAmzTargetAmazonRekognitionTextDetectionApi : OpenStringEnum<XAmzTargetAmazonRekognitionTextDetectionApi>
{
    private XAmzTargetAmazonRekognitionTextDetectionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionTextDetectionApi RekognitionServiceGetTextDetection = new(
        "RekognitionService.GetTextDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetTextDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetTextDetection => onRekognitionServiceGetTextDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetTextDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetTextDetection) onRekognitionServiceGetTextDetection();
        else otherwise(Value);
    }
}
