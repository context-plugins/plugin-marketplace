using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget45>))]
public sealed record XAmzTarget45 : OpenStringEnum<XAmzTarget45>
{
    private XAmzTarget45(string value) : base(value)
    {
    }

    public static readonly XAmzTarget45 Comprehend20171127StopDominantLanguageDetectionJob = new(
        "Comprehend_20171127.StopDominantLanguageDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StopDominantLanguageDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StopDominantLanguageDetectionJob => onComprehend20171127StopDominantLanguageDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StopDominantLanguageDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127StopDominantLanguageDetectionJob) onComprehend20171127StopDominantLanguageDetectionJob();
        else otherwise(Value);
    }
}
