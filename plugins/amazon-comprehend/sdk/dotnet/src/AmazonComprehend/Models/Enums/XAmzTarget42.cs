using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget42>))]
public sealed record XAmzTarget42 : OpenStringEnum<XAmzTarget42>
{
    private XAmzTarget42(string value) : base(value)
    {
    }

    public static readonly XAmzTarget42 Comprehend20171127DescribeDominantLanguageDetectionJob = new(
        "Comprehend_20171127.DescribeDominantLanguageDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DescribeDominantLanguageDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127DescribeDominantLanguageDetectionJob => onComprehend20171127DescribeDominantLanguageDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DescribeDominantLanguageDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127DescribeDominantLanguageDetectionJob) onComprehend20171127DescribeDominantLanguageDetectionJob();
        else otherwise(Value);
    }
}
