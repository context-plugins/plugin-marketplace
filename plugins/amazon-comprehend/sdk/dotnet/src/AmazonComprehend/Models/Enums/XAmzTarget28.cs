using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget28>))]
public sealed record XAmzTarget28 : OpenStringEnum<XAmzTarget28>
{
    private XAmzTarget28(string value) : base(value)
    {
    }

    public static readonly XAmzTarget28 Comprehend20171127DeleteEntityRecognizer = new(
        "Comprehend_20171127.DeleteEntityRecognizer");

    public TResult Match<TResult>(Func<TResult> onComprehend20171127DeleteEntityRecognizer,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Comprehend20171127DeleteEntityRecognizer => onComprehend20171127DeleteEntityRecognizer(),
            _ => otherwise(Value)
        };

    public void Match(Action onComprehend20171127DeleteEntityRecognizer, Action<string> otherwise)
    {
        if (this == Comprehend20171127DeleteEntityRecognizer) onComprehend20171127DeleteEntityRecognizer();
        else otherwise(Value);
    }
}
