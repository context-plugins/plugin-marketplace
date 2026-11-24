using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget62>))]
public sealed record XAmzTarget62 : OpenStringEnum<XAmzTarget62>
{
    private XAmzTarget62(string value) : base(value)
    {
    }

    public static readonly XAmzTarget62 Comprehend20171127StartPiiEntitiesDetectionJob = new(
        "Comprehend_20171127.StartPiiEntitiesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartPiiEntitiesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartPiiEntitiesDetectionJob => onComprehend20171127StartPiiEntitiesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartPiiEntitiesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartPiiEntitiesDetectionJob) onComprehend20171127StartPiiEntitiesDetectionJob();
        else otherwise(Value);
    }
}
