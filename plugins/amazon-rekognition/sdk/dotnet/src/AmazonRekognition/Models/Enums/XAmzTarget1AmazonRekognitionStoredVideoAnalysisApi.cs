using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi>))]
public sealed record XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi : OpenStringEnum<XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi>
{
    private XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionStoredVideoAnalysisApi RekognitionServiceStartLabelDetection = new(
        "RekognitionService.StartLabelDetection");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartLabelDetection,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartLabelDetection => onRekognitionServiceStartLabelDetection(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartLabelDetection, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartLabelDetection) onRekognitionServiceStartLabelDetection();
        else otherwise(Value);
    }
}
