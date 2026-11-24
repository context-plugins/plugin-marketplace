using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget66>))]
public sealed record XAmzTarget66 : OpenStringEnum<XAmzTarget66>
{
    private XAmzTarget66(string value) : base(value)
    {
    }

    public static readonly XAmzTarget66 Comprehend20171127StartSentimentDetectionJob = new(
        "Comprehend_20171127.StartSentimentDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartSentimentDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartSentimentDetectionJob => onComprehend20171127StartSentimentDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartSentimentDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartSentimentDetectionJob) onComprehend20171127StartSentimentDetectionJob();
        else otherwise(Value);
    }
}
