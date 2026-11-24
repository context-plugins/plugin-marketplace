using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTargetAmazonRekognitionMediaAnalysisJobApi>))]
public sealed record XAmzTargetAmazonRekognitionMediaAnalysisJobApi : OpenStringEnum<XAmzTargetAmazonRekognitionMediaAnalysisJobApi>
{
    private XAmzTargetAmazonRekognitionMediaAnalysisJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTargetAmazonRekognitionMediaAnalysisJobApi RekognitionServiceGetMediaAnalysisJob = new(
        "RekognitionService.GetMediaAnalysisJob");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceGetMediaAnalysisJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceGetMediaAnalysisJob => onRekognitionServiceGetMediaAnalysisJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceGetMediaAnalysisJob, Action<string> otherwise)
    {
        if (this == RekognitionServiceGetMediaAnalysisJob) onRekognitionServiceGetMediaAnalysisJob();
        else otherwise(Value);
    }
}
