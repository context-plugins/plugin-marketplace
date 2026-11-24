using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5AmazonRekognitionOperationsApi>))]
public sealed record XAmzTarget5AmazonRekognitionOperationsApi : OpenStringEnum<XAmzTarget5AmazonRekognitionOperationsApi>
{
    private XAmzTarget5AmazonRekognitionOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5AmazonRekognitionOperationsApi RekognitionServiceDetectModerationLabels = new(
        "RekognitionService.DetectModerationLabels");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceDetectModerationLabels,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceDetectModerationLabels => onRekognitionServiceDetectModerationLabels(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceDetectModerationLabels, Action<string> otherwise)
    {
        if (this == RekognitionServiceDetectModerationLabels) onRekognitionServiceDetectModerationLabels();
        else otherwise(Value);
    }
}
