using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget49>))]
public sealed record XAmzTarget49 : OpenStringEnum<XAmzTarget49>
{
    private XAmzTarget49(string value) : base(value)
    {
    }

    public static readonly XAmzTarget49 Comprehend20171127StopEntitiesDetectionJob = new(
        "Comprehend_20171127.StopEntitiesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopEntitiesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127StopEntitiesDetectionJob => onComprehend20171127StopEntitiesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopEntitiesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StopEntitiesDetectionJob) onComprehend20171127StopEntitiesDetectionJob();
        else otherwise(Value);
    }
}
