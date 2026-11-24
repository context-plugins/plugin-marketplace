using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget47>))]
public sealed record XAmzTarget47 : OpenStringEnum<XAmzTarget47>
{
    private XAmzTarget47(string value) : base(value)
    {
    }

    public static readonly XAmzTarget47 Comprehend20171127ListEntitiesDetectionJobs = new(
        "Comprehend_20171127.ListEntitiesDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListEntitiesDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListEntitiesDetectionJobs => onComprehend20171127ListEntitiesDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListEntitiesDetectionJobs, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListEntitiesDetectionJobs) onComprehend20171127ListEntitiesDetectionJobs();
        else otherwise(Value);
    }
}
