using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonRekognitionMediaAnalysisJobApi>))]
public sealed record XAmzTarget2AmazonRekognitionMediaAnalysisJobApi : OpenStringEnum<XAmzTarget2AmazonRekognitionMediaAnalysisJobApi>
{
    private XAmzTarget2AmazonRekognitionMediaAnalysisJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonRekognitionMediaAnalysisJobApi RekognitionServiceStartMediaAnalysisJob = new(
        "RekognitionService.StartMediaAnalysisJob");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceStartMediaAnalysisJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceStartMediaAnalysisJob => onRekognitionServiceStartMediaAnalysisJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceStartMediaAnalysisJob, Action<string> otherwise)
    {
        if (this == RekognitionServiceStartMediaAnalysisJob) onRekognitionServiceStartMediaAnalysisJob();
        else otherwise(Value);
    }
}
