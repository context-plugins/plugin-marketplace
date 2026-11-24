using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget5>))]
public sealed record XAmzTarget5 : OpenStringEnum<XAmzTarget5>
{
    private XAmzTarget5(string value) : base(value)
    {
    }

    public static readonly XAmzTarget5 Comprehend20171127BatchDetectTargetedSentiment = new(
        "Comprehend_20171127.BatchDetectTargetedSentiment");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127BatchDetectTargetedSentiment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                Comprehend20171127BatchDetectTargetedSentiment => onComprehend20171127BatchDetectTargetedSentiment(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127BatchDetectTargetedSentiment, Action<string> otherwise)
    {
        if (this == Comprehend20171127BatchDetectTargetedSentiment) onComprehend20171127BatchDetectTargetedSentiment();
        else otherwise(Value);
    }
}
