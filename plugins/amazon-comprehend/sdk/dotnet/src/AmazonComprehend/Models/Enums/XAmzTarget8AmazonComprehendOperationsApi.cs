using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget8AmazonComprehendOperationsApi>))]
public sealed record XAmzTarget8AmazonComprehendOperationsApi : OpenStringEnum<XAmzTarget8AmazonComprehendOperationsApi>
{
    private XAmzTarget8AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget8AmazonComprehendOperationsApi Comprehend20171127DetectTargetedSentiment = new(
        "Comprehend_20171127.DetectTargetedSentiment");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DetectTargetedSentiment,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DetectTargetedSentiment => onComprehend20171127DetectTargetedSentiment(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DetectTargetedSentiment, Action<string> otherwise)
    {
        if (this == Comprehend20171127DetectTargetedSentiment) onComprehend20171127DetectTargetedSentiment();
        else otherwise(Value);
    }
}
