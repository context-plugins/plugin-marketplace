using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionCustomLabelsApi>))]
public sealed record XAmzTargetAmazonRekognitionCustomLabelsApi : OpenStringEnum<XAmzTargetAmazonRekognitionCustomLabelsApi>
{
    private XAmzTargetAmazonRekognitionCustomLabelsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionCustomLabelsApi RekognitionServiceDetectCustomLabels = new(
        "RekognitionService.DetectCustomLabels");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectCustomLabels,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectCustomLabels => onRekognitionServiceDetectCustomLabels(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectCustomLabels, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectCustomLabels) onRekognitionServiceDetectCustomLabels();
        else otherwise(Value);
    }
}
