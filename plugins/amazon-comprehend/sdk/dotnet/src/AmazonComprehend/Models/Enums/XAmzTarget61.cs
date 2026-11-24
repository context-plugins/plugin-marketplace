using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget61>))]
public sealed record XAmzTarget61 : OpenStringEnum<XAmzTarget61>
{
    private XAmzTarget61(string value) : base(value)
    {
    }

    public static readonly XAmzTarget61 Comprehend20171127ListPiiEntitiesDetectionJobs = new(
        "Comprehend_20171127.ListPiiEntitiesDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListPiiEntitiesDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListPiiEntitiesDetectionJobs => onComprehend20171127ListPiiEntitiesDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListPiiEntitiesDetectionJobs, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListPiiEntitiesDetectionJobs) onComprehend20171127ListPiiEntitiesDetectionJobs();
        else otherwise(Value);
    }
}
