using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget44>))]
public sealed record XAmzTarget44 : OpenStringEnum<XAmzTarget44>
{
    private XAmzTarget44(string value) : base(value)
    {
    }

    public static readonly XAmzTarget44 Comprehend20171127StartDominantLanguageDetectionJob = new(
        "Comprehend_20171127.StartDominantLanguageDetectionJob");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127StartDominantLanguageDetectionJob,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127StartDominantLanguageDetectionJob => onComprehend20171127StartDominantLanguageDetectionJob(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127StartDominantLanguageDetectionJob, Action<string> otherwise)
    {
        if (this ==
            Comprehend20171127StartDominantLanguageDetectionJob) onComprehend20171127StartDominantLanguageDetectionJob();
        else otherwise(Value);
    }
}
