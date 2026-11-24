using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget63>))]
public sealed record XAmzTarget63 : OpenStringEnum<XAmzTarget63>
{
    private XAmzTarget63(string value) : base(value)
    {
    }

    public static readonly XAmzTarget63 Comprehend20171127StopPiiEntitiesDetectionJob = new(
        "Comprehend_20171127.StopPiiEntitiesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopPiiEntitiesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopPiiEntitiesDetectionJob => onComprehend20171127StopPiiEntitiesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopPiiEntitiesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StopPiiEntitiesDetectionJob) onComprehend20171127StopPiiEntitiesDetectionJob();
        else otherwise(Value);
    }
}
