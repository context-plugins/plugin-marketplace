using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget65>))]
public sealed record XAmzTarget65 : OpenStringEnum<XAmzTarget65>
{
    private XAmzTarget65(string value) : base(value)
    {
    }

    public static readonly XAmzTarget65 Comprehend20171127ListSentimentDetectionJobs = new(
        "Comprehend_20171127.ListSentimentDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListSentimentDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListSentimentDetectionJobs => onComprehend20171127ListSentimentDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListSentimentDetectionJobs, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListSentimentDetectionJobs) onComprehend20171127ListSentimentDetectionJobs();
        else otherwise(Value);
    }
}
