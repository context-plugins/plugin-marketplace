using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionTextDetectionApi>))]
public sealed record XAmzTarget2AmazonRekognitionTextDetectionApi : OpenStringEnum<XAmzTarget2AmazonRekognitionTextDetectionApi>
{
    private XAmzTarget2AmazonRekognitionTextDetectionApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionTextDetectionApi RekognitionServiceDetectText = new(
        "RekognitionService.DetectText");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectText, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectText => onRekognitionServiceDetectText(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectText, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectText) onRekognitionServiceDetectText();
        else otherwise(Value);
    }
}
