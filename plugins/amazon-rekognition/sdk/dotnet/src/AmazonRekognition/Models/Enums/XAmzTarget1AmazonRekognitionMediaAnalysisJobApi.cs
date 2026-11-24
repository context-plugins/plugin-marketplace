using System;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Enum;

namespace AmazonRekognition.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget1AmazonRekognitionMediaAnalysisJobApi>))]
public sealed record XAmzTarget1AmazonRekognitionMediaAnalysisJobApi : OpenStringEnum<XAmzTarget1AmazonRekognitionMediaAnalysisJobApi>
{
    private XAmzTarget1AmazonRekognitionMediaAnalysisJobApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget1AmazonRekognitionMediaAnalysisJobApi RekognitionServiceListMediaAnalysisJobs = new(
        "RekognitionService.ListMediaAnalysisJobs");

    public TResult Match<TResult>(Func<TResult> onRekognitionServiceListMediaAnalysisJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == RekognitionServiceListMediaAnalysisJobs => onRekognitionServiceListMediaAnalysisJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onRekognitionServiceListMediaAnalysisJobs, Action<string> otherwise)
    {
        if (this == RekognitionServiceListMediaAnalysisJobs) onRekognitionServiceListMediaAnalysisJobs();
        else otherwise(Value);
    }
}
