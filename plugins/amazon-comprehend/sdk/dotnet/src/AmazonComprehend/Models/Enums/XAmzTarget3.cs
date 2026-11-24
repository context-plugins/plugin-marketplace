using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget3>))]
public sealed record XAmzTarget3 : OpenStringEnum<XAmzTarget3>
{
    private XAmzTarget3(string value) : base(value)
    {
    }

    public static readonly XAmzTarget3 Comprehend20171127BatchDetectSentiment = new(
        "Comprehend_20171127.BatchDetectSentiment");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127BatchDetectSentiment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127BatchDetectSentiment => onComprehend20171127BatchDetectSentiment(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127BatchDetectSentiment, Action<string> otherwise)
    {
        if (this == Comprehend20171127BatchDetectSentiment) onComprehend20171127BatchDetectSentiment();
        else otherwise(Value);
    }
}
