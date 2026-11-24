using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionTextDetectionApi>))]
public sealed record XAmzTarget1AmazonRekognitionTextDetectionApi : OpenStringEnum<XAmzTarget1AmazonRekognitionTextDetectionApi>
{
    private XAmzTarget1AmazonRekognitionTextDetectionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionTextDetectionApi RekognitionServiceStartTextDetection = new(
        "RekognitionService.StartTextDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartTextDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartTextDetection => onRekognitionServiceStartTextDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartTextDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartTextDetection) onRekognitionServiceStartTextDetection();
        else otherwise(Value);
    }
}
