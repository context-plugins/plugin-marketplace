using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record XAmzTargetAmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<XAmzTargetAmazonRekognitionStoredVideoAnalysisApi>
{
    private XAmzTargetAmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionStoredVideoAnalysisApi RekognitionServiceGetLabelDetection = new(
        "RekognitionService.GetLabelDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetLabelDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetLabelDetection => onRekognitionServiceGetLabelDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetLabelDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetLabelDetection) onRekognitionServiceGetLabelDetection();
        else otherwise(Value);
    }
}
