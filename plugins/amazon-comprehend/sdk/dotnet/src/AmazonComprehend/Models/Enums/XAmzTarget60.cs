using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget60>))]
public sealed record XAmzTarget60 : OpenStringEnum<XAmzTarget60>
{
    private XAmzTarget60(string value) : base(value)
    {
    }

    public static readonly XAmzTarget60 Comprehend20171127DescribePiiEntitiesDetectionJob = new(
        "Comprehend_20171127.DescribePiiEntitiesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribePiiEntitiesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribePiiEntitiesDetectionJob => onComprehend20171127DescribePiiEntitiesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribePiiEntitiesDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127DescribePiiEntitiesDetectionJob) onComprehend20171127DescribePiiEntitiesDetectionJob();
        else otherwise(Value);
    }
}
