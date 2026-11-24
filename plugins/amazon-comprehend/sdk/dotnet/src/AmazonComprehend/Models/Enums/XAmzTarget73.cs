using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget73>))]
public sealed record XAmzTarget73 : OpenStringEnum<XAmzTarget73>
{
    private XAmzTarget73(string value) : base(value)
    {
    }

    public static readonly XAmzTarget73 Comprehend20171127ListTopicsDetectionJobs = new(
        "Comprehend_20171127.ListTopicsDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListTopicsDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127ListTopicsDetectionJobs => onComprehend20171127ListTopicsDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListTopicsDetectionJobs, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListTopicsDetectionJobs) onComprehend20171127ListTopicsDetectionJobs();
        else otherwise(Value);
    }
}
