using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget52>))]
public sealed record XAmzTarget52 : OpenStringEnum<XAmzTarget52>
{
    private XAmzTarget52(string value) : base(value)
    {
    }

    public static readonly XAmzTarget52 Comprehend20171127StartEventsDetectionJob = new(
        "Comprehend_20171127.StartEventsDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartEventsDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127StartEventsDetectionJob => onComprehend20171127StartEventsDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartEventsDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartEventsDetectionJob) onComprehend20171127StartEventsDetectionJob();
        else otherwise(Value);
    }
}
