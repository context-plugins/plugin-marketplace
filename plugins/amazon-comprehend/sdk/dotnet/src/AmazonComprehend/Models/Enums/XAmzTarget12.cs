using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget12>))]
public sealed record XAmzTarget12 : OpenStringEnum<XAmzTarget12>
{
    private XAmzTarget12(string value) : base(value)
    {
    }

    public static readonly XAmzTarget12 Comprehend20171127DetectSentiment = new("Comprehend_20171127.DetectSentiment");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectSentiment, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectSentiment => onComprehend20171127DetectSentiment(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectSentiment, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectSentiment) onComprehend20171127DetectSentiment();
        else otherwise(Value);
    }
}
