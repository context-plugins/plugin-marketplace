using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget2AmazonComprehendOperationsApi>))]
public sealed record XAmzTarget2AmazonComprehendOperationsApi : OpenStringEnum<XAmzTarget2AmazonComprehendOperationsApi>
{
    private XAmzTarget2AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget2AmazonComprehendOperationsApi Comprehend20171127DetectDominantLanguage = new(
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
