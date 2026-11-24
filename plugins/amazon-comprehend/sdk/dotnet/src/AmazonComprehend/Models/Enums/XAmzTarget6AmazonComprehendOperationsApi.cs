using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget6AmazonComprehendOperationsApi>))]
public sealed record XAmzTarget6AmazonComprehendOperationsApi : OpenStringEnum<XAmzTarget6AmazonComprehendOperationsApi>
{
    private XAmzTarget6AmazonComprehendOperationsApi(string value) : base(value)
    {
    }

    public static readonly XAmzTarget6AmazonComprehendOperationsApi Comprehend20171127DetectSentiment = new(
        "Comprehend_20171127.DetectSentiment");

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
