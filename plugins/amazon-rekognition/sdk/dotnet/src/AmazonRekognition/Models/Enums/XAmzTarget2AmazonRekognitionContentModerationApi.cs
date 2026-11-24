using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionContentModerationApi>))]
public sealed record XAmzTarget2AmazonRekognitionContentModerationApi : OpenStringEnum<XAmzTarget2AmazonRekognitionContentModerationApi>
{
    private XAmzTarget2AmazonRekognitionContentModerationApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionContentModerationApi RekognitionServiceDetectModerationLabels = new(
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
