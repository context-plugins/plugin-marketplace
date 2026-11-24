using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionOperationsApi>))]
public sealed record XAmzTarget2AmazonRekognitionOperationsApi : OpenStringEnum<XAmzTarget2AmazonRekognitionOperationsApi>
{
    private XAmzTarget2AmazonRekognitionOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionOperationsApi RekognitionServiceDetectCustomLabels = new(
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
