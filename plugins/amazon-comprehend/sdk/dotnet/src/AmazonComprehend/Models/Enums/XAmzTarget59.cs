using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget59>))]
public sealed record XAmzTarget59 : OpenStringEnum<XAmzTarget59>
{
    private XAmzTarget59(string value) : base(value)
    {
    }

    public static readonly XAmzTarget59 Comprehend20171127StopKeyPhrasesDetectionJob = new(
        "Comprehend_20171127.StopKeyPhrasesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopKeyPhrasesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopKeyPhrasesDetectionJob => onComprehend20171127StopKeyPhrasesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopKeyPhrasesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StopKeyPhrasesDetectionJob) onComprehend20171127StopKeyPhrasesDetectionJob();
        else otherwise(Value);
    }
}
