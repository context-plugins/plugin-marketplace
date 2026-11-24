using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8>))]
public sealed record XAmzTarget8 : OpenStringEnum<XAmzTarget8>
{
    private XAmzTarget8(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8 Comprehend20171127DetectDominantLanguage = new(
        "Comprehend_20171127.DetectDominantLanguage");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectDominantLanguage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectDominantLanguage => onComprehend20171127DetectDominantLanguage(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectDominantLanguage, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectDominantLanguage) onComprehend20171127DetectDominantLanguage();
        else otherwise(Value);
    }
}
