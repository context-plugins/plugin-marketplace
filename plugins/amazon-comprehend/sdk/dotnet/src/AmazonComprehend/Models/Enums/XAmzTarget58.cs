using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget58>))]
public sealed record XAmzTarget58 : OpenStringEnum<XAmzTarget58>
{
    private XAmzTarget58(string value) : base(value)
    {
    }

    public static readonly XAmzTarget58 Comprehend20171127StartKeyPhrasesDetectionJob = new(
        "Comprehend_20171127.StartKeyPhrasesDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartKeyPhrasesDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartKeyPhrasesDetectionJob => onComprehend20171127StartKeyPhrasesDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartKeyPhrasesDetectionJob, Action<string> otherwise)
    {
        if (this == Comprehend20171127StartKeyPhrasesDetectionJob) onComprehend20171127StartKeyPhrasesDetectionJob();
        else otherwise(Value);
    }
}
