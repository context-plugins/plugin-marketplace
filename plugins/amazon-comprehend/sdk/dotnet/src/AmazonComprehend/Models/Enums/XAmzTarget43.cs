using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget43>))]
public sealed record XAmzTarget43 : OpenStringEnum<XAmzTarget43>
{
    private XAmzTarget43(string value) : base(value)
    {
    }

    public static readonly XAmzTarget43 Comprehend20171127ListDominantLanguageDetectionJobs = new(
        "Comprehend_20171127.ListDominantLanguageDetectionJobs");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127ListDominantLanguageDetectionJobs,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127ListDominantLanguageDetectionJobs => onComprehend20171127ListDominantLanguageDetectionJobs(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127ListDominantLanguageDetectionJobs, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127ListDominantLanguageDetectionJobs) onComprehend20171127ListDominantLanguageDetectionJobs();
        else otherwise(Value);
    }
}
