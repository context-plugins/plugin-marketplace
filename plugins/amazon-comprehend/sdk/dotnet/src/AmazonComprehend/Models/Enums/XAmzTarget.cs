using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget>))]
public sealed record XAmzTarget : OpenStringEnum<XAmzTarget>
{
    private XAmzTarget(string value) : base(value)
    {
    }

    public static readonly XAmzTarget Comprehend20171127BatchDetectDominantLanguage = new(
        "Comprehend_20171127.BatchDetectDominantLanguage");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127BatchDetectDominantLanguage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127BatchDetectDominantLanguage => onComprehend20171127BatchDetectDominantLanguage(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127BatchDetectDominantLanguage, Action<string> otherwise)
    {
        if (this == Comprehend20171127BatchDetectDominantLanguage) onComprehend20171127BatchDetectDominantLanguage();
        else otherwise(Value);
    }
}
