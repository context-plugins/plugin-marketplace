using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget48>))]
public sealed record XAmzTarget48 : OpenStringEnum<XAmzTarget48>
{
    private XAmzTarget48(string value) : base(value)
    {
    }

    public static readonly XAmzTarget48 Comprehend20171127StartEntitiesDetectionJob = new(
        "Comprehend_20171127.StartEntitiesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartEntitiesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartEntitiesDetectionJob => onComprehend20171127StartEntitiesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartEntitiesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartEntitiesDetectionJob) onComprehend20171127StartEntitiesDetectionJob();
        else otherwise(Value);
    }
}
