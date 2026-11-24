using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget74>))]
public sealed record XAmzTarget74 : OpenStringEnum<XAmzTarget74>
{
    private XAmzTarget74(string value) : base(value)
    {
    }

    public static readonly XAmzTarget74 Comprehend20171127StartTopicsDetectionJob = new(
        "Comprehend_20171127.StartTopicsDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartTopicsDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127StartTopicsDetectionJob => onComprehend20171127StartTopicsDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartTopicsDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartTopicsDetectionJob) onComprehend20171127StartTopicsDetectionJob();
        else otherwise(Value);
    }
}
