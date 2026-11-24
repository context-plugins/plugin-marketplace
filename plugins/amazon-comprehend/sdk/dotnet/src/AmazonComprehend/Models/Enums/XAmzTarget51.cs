using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget51>))]
public sealed record XAmzTarget51 : OpenStringEnum<XAmzTarget51>
{
    private XAmzTarget51(string value) : base(value)
    {
    }

    public static readonly XAmzTarget51 Comprehend20171127ListEventsDetectionJobs = new(
        "Comprehend_20171127.ListEventsDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListEventsDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListEventsDetectionJobs => onComprehend20171127ListEventsDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListEventsDetectionJobs, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListEventsDetectionJobs) onComprehend20171127ListEventsDetectionJobs();
        else otherwise(Value);
    }
}
