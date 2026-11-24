using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget53>))]
public sealed record XAmzTarget53 : OpenStringEnum<XAmzTarget53>
{
    private XAmzTarget53(string value) : base(value)
    {
    }

    public static readonly XAmzTarget53 Comprehend20171127StopEventsDetectionJob = new(
        "Comprehend_20171127.StopEventsDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopEventsDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127StopEventsDetectionJob => onComprehend20171127StopEventsDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopEventsDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StopEventsDetectionJob) onComprehend20171127StopEventsDetectionJob();
        else otherwise(Value);
    }
}
