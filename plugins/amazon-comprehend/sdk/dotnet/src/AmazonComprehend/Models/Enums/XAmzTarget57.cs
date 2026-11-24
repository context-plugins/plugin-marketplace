using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget57>))]
public sealed record XAmzTarget57 : OpenStringEnum<XAmzTarget57>
{
    private XAmzTarget57(string value) : base(value)
    {
    }

    public static readonly XAmzTarget57 Comprehend20171127ListKeyPhrasesDetectionJobs = new(
        "Comprehend_20171127.ListKeyPhrasesDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListKeyPhrasesDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListKeyPhrasesDetectionJobs => onComprehend20171127ListKeyPhrasesDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListKeyPhrasesDetectionJobs, Action<string> otherwise)
    {
        if (this == Comprehend20171127ListKeyPhrasesDetectionJobs) onComprehend20171127ListKeyPhrasesDetectionJobs();
        else otherwise(Value);
    }
}
