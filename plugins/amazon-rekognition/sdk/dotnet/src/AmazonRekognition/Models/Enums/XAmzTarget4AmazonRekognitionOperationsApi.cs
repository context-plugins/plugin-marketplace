using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget4AmazonRekognitionOperationsApi>))]
public sealed record XAmzTarget4AmazonRekognitionOperationsApi : OpenStringEnum<XAmzTarget4AmazonRekognitionOperationsApi>
{
    private XAmzTarget4AmazonRekognitionOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget4AmazonRekognitionOperationsApi RekognitionServiceDetectLabels = new(
        "RekognitionService.DetectLabels");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectLabels, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectLabels => onRekognitionServiceDetectLabels(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectLabels, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectLabels) onRekognitionServiceDetectLabels();
        else otherwise(Value);
    }
}
